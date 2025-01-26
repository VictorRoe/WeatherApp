"use client";
import { useState } from "react";
import { Headers } from "./Components/Headers";
import { Footer } from "./Components/Footer";
import { SearchBar } from "./Components/SearchBar";
import { HistoryList } from "./Components/HistoryList";

type WeatherData = {
  id: string;
  city: string;
  country: string;
  currentWeather: string;
  feelsLike: number;
};

export default function Home() {
  const [history, setHistory] = useState<WeatherData[]>([]);

  const addToHistory = (data: WeatherData) => {
    setHistory((prev) => [data, ...prev.slice(0, 2)]); // Limit to 3 items
  };

  const removeFromHistory = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Weather App
          </h1>
          <div className="mt-12 mb-16">
            <SearchBar onSearch={addToHistory} />
          </div>
          <HistoryList history={history} onRemove={removeFromHistory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
