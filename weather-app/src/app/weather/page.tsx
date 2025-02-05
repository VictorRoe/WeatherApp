"use client";

import { Cloud, Wind, Droplets } from "lucide-react";

export default function Weather() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-10% from-[#1E1E1E] to-[#FF5E71]">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center px-4 py-12 sm:px-8">
          {/* Location and Time */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-white">
              Dallas, TX
            </h1>
            <p className="text-sm sm:text-base text-gray-200 mt-1">
              Sunday, June 30, 01:32pm
            </p>
          </div>

          {/* Weather Alert */}
          <p className="text-sm sm:text-base text-gray-200 mb-8">
            Severe heat expected
          </p>

          {/* Temperature */}
          <div className="text-center mb-10">
            <h2 className="text-7xl sm:text-8xl font-light text-white">92°F</h2>
            <div className="flex justify-center gap-6 mt-3 text-sm sm:text-base text-white">
              <span>High: 97°F</span>
              <span>Low: 82°F</span>
            </div>
          </div>

          {/* Weather Metrics */}
          <div className="flex justify-between w-full max-w-xs mb-10">
            <div className="w-20 h-20 flex flex-col items-center justify-center">
              <div className="p-0 flex flex-col items-center">
                <Cloud className="h-7 w-7 sm:h-8 sm:w-8 text-gray-300 mb-1" />
                <span className="text-sm sm:text-base">3%</span>
              </div>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center">
              <div className="p-0 flex flex-col items-center">
                <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-gray-300 mb-1" />
                <span className="text-sm sm:text-base">42%</span>
              </div>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center">
              <div className="p-0 flex flex-col items-center">
                <Wind className="h-7 w-7 sm:h-8 sm:w-8 text-gray-300 mb-1" />
                <span className="text-sm sm:text-base">4 mph</span>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
