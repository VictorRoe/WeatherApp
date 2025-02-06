"use client";
import { useState } from "react";
import { Headers } from "./Components/Headers";
import { Footer } from "./Components/Footer";
import { SearchBar } from "./Components/SearchBar";
import { HistoryList } from "./Components/HistoryList";
import { SplitText } from "./Animations/SplitText";
import { motion } from "framer-motion";
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
    setHistory((prev) => [data, ...prev.slice(0, 2)]);
  };

  const removeFromHistory = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          <div className="text-lg sm:text-5xl  text-white mb-8 text-center">
            <SplitText text="Your weather, always up to date." />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-12 mb-16"
          >
            <SearchBar onSearch={addToHistory} />
          </motion.div>
          <HistoryList history={history} onRemove={removeFromHistory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
