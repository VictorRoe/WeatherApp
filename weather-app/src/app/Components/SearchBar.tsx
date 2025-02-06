"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type WeatherData = {
  id: string;
  city: string;
  country: string;
  currentWeather: string;
  feelsLike: number;
};

type SearchBarProps = {
  onSearch: (data: WeatherData) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Por ahora, simularemos datos
    const mockData = {
      id: Date.now().toString(),
      city: query,
      country: "Country",
      currentWeather: "Sunny",
      feelsLike: 25,
    };
    onSearch(mockData);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Which city are you looking for?"
          className="w-full p-3 sm:p-4 pr-12 rounded-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70
           focus:outline-none focus:ring-1 focus:ring-[#FF5E71] transition-all duration-200 ease-out transform text-sm sm:text-base"
        />
        <button
          type="submit"
          className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2"
        >
          <Search className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      {/* API Sponsor */}
      <div className="text-[#FFF8F0] text-xs text-center py-2 text-opacity-60">
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
    </form>
  );
};
