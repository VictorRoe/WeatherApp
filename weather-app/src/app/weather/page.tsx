"use client";

import { Cloud, Wind, Droplets } from "lucide-react";

export default function Weather() {
  return (
    <div className="w-full max-w-md px-4 py-8">
      <div className="flex flex-col items-center">
        {/* Location and Time */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-medium text-white">
            Dallas, TX
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-1">
            Sunday, June 30, 01:32pm
          </p>
        </div>

        {/* Weather Alert */}
        <p className="text-sm sm:text-base text-gray-200 mb-4">
          Severe heat expected
        </p>

        {/* Temperature */}
        <div className="text-center mb-6">
          <h2 className="text-6xl sm:text-7xl font-light text-white">92°F</h2>
          <div className="flex justify-center gap-4 mt-2 text-sm sm:text-base text-white">
            <span>High: 97°F</span>
            <span>Low: 82°F</span>
          </div>
        </div>

        {/* Weather Metrics */}
        <div className="flex justify-between w-full max-w-xs mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-white/10 rounded-lg">
            <Cloud className="h-6 w-6 sm:h-7 sm:w-7 text-gray-300 mb-1" />
            <span className="text-sm sm:text-base text-white">3%</span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-white/10 rounded-lg">
            <Droplets className="h-6 w-6 sm:h-7 sm:w-7 text-gray-300 mb-1" />
            <span className="text-sm sm:text-base text-white">42%</span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center bg-white/10 rounded-lg">
            <Wind className="h-6 w-6 sm:h-7 sm:w-7 text-gray-300 mb-1" />
            <span className="text-sm sm:text-base text-white">4 mph</span>
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
