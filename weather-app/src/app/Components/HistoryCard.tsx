import { X } from "lucide-react";

type HistoryCardProps = {
  data: {
    id: string;
    city: string;
    country: string;
    currentWeather: string;
    feelsLike: number;
  };
  onRemove: (id: string) => void;
};

export default function HistoryCard({ data, onRemove }: HistoryCardProps) {
  return (
    <div className="bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-opacity-30">
      <button
        onClick={() => onRemove(data.id)}
        className="absolute top-2 right-2 text-white opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        <X size={18} />
      </button>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
        {data.city}
      </h3>
      <p className="text-white opacity-80 text-sm sm:text-base">
        {data.country}
      </p>
      <p className="text-white text-base sm:text-lg mt-2">
        {data.currentWeather}
      </p>
      <p className="text-white opacity-80 text-sm sm:text-base">
        Feels like: {data.feelsLike}°C
      </p>
    </div>
  );
}
