"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";
import debounce from "lodash/debounce";

type WeatherData = {
  id: string;
  city: string;
  country: string;
  currentWeather: string;
  feelsLike: number;
};

type Place = {
  display_name: string;
  lat: string;
  lon: string;
  address: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    country?: string;
    county?: string;
  };
};

type SimplifiedPlace = {
  city: string;
  state: string;
  country: string;
  original: Place;
};

type SearchBarProps = {
  onSearch: (data: WeatherData) => void;
};

export const SearchBar = ({}: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SimplifiedPlace[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const simplifyPlace = useCallback((place: Place): SimplifiedPlace => {
    return {
      city:
        place.address.city ||
        place.address.town ||
        place.address.village ||
        place.address.county ||
        "",
      state: place.address.state || "",
      country: place.address.country || "",
      original: place,
    };
  }, []);

  const fetchLocations = useCallback(
    async (input: string) => {
      if (input.length < 2) {
        setSuggestions([]);
        return;
      }

      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        input
      )}&limit=3&addressdetails=1`;
      try {
        const response = await fetch(url);
        const data: Place[] = await response.json();
        const simplifiedData = data.map(simplifyPlace);
        setSuggestions(simplifiedData);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error obteniendo sugerencias:", error);
      } finally {
      }
    },
    [simplifyPlace]
  );

  useEffect(() => {
    const debouncedFetchLocations = debounce(fetchLocations, 500);
    debouncedFetchLocations(debouncedQuery);

    return () => {
      debouncedFetchLocations.cancel();
    };
  }, [debouncedQuery, fetchLocations]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
    setDebouncedQuery(input);
  };

  const handleSelect = (place: SimplifiedPlace) => {
    const formattedQuery =
      `${place.city}-${place.state}-${place.country}`.replace(/\s+/g, "-");
    router.push(`/weather?query=${encodeURIComponent(formattedQuery)}`);
  };

  return (
    <div ref={searchRef} className="w-full max-w-md mx-auto relative z-10">
      <div className="relative z-30">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Which city are you looking for?"
          className="w-full p-3 sm:p-4 pr-12 rounded-xl bg-neutral-600 text-white placeholder-white placeholder-opacity-70
             focus:outline-none focus:ring-1 focus:ring-[#FF5E71] transition-all duration-200 ease-out transform text-sm sm:text-base"
        />
        <button
          type="button"
          onClick={() => suggestions.length > 0 && handleSelect(suggestions[0])}
          className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2"
        >
          <Search className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-neutral-600 text-white rounded-b-lg max-h-90 overflow-y-auto z-20 pt-4 top-12">
          {suggestions.map((place, index) => (
            <li
              key={index}
              onClick={() => handleSelect(place)}
              className="p-2 hover:bg-neutral-700 cursor-pointer"
            >
              {place.city}, {place.state}, {place.country}
            </li>
          ))}
        </ul>
      )}
      {/* API Sponsor */}
      <div className="text-[#FFF8F0] text-xs text-center py-2 text-opacity-60 z-0">
        Powered by{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FFF8F0]/80"
        >
          WeatherAPI.com
        </a>
      </div>
    </div>
  );
};
