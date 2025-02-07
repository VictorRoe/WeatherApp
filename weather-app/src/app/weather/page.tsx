"use client";

import { Cloud, Wind, Droplets } from "lucide-react";
import { useEffect, useState } from "react";

interface WeatherData {
  location: {
    name: string;
    region: string;
    localtime: string;
  };
  current: {
    temp_f: number;
    temp_c: number;
    feelslike_f: number;
    wind_kph: number;
    heatindex_f: number;
    dewpoint_f: number;
    humidity: number;
    cloud: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://weatherapp-v9yt.onrender.com/weather?query=La-Ceja-Antioquia"
        );
        const data: WeatherData = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p className="text-white">Cargando clima...</p>;
  }

  if (!weatherData) {
    return <p className="text-red-500">No se pudo cargar el clima.</p>;
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  const formattedDate = formatDate(weatherData.location.localtime);

  const temp_c = Math.round(weatherData.current.temp_c);

  return (
    <div className="w-full max-w-md px-4 py-8">
      <div className="flex flex-col items-center">
        {/* Location and Time */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-medium text-white">
            {weatherData.location.name}, {weatherData.location.region}
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-1">
            {formattedDate}
          </p>
        </div>

        {/* Weather Alert */}
        <p className="text-sm sm:text-base text-gray-200 mb-4">
          {weatherData.current.condition.text}
        </p>

        {/* Temperature */}
        <div className="text-center mb-6">
          <h2 className="text-6xl sm:text-7xl font-light text-white">
            {temp_c}°C
          </h2>
          <div className="flex justify-center gap-4 mt-2 text-sm sm:text-base text-white">
            <span>High: 97°F</span>
            <span>Low: 82°F</span>
          </div>
        </div>

        {/* Weather Metrics */}
        <div className="flex justify-between w-full max-w-xs mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-white/10 rounded-lg">
            <Cloud className="h-6 w-6 sm:h-7 sm:w-7 text-gray-300 mb-1" />
            <span className="text-sm sm:text-base text-white">
              {weatherData.current.cloud}%
            </span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-white/10 rounded-lg">
            <Droplets className="h-6 w-6 sm:h-7 sm:w-7 text-gray-300 mb-1" />
            <span className="text-sm sm:text-base text-white">
              {weatherData.current.humidity}%
            </span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-white/10 rounded-lg">
            <Wind className="h-6 w-6 sm:h-7 sm:w-7 text-gray-300 mb-1" />
            <span className="text-sm sm:text-base text-white">
              {weatherData.current.wind_kph} kph
            </span>
          </div>
        </div>

        {/* Powered by */}
        <div className="text-[#FFF8F0] text-xs text-center text-opacity-60">
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
    </div>
  );
}
