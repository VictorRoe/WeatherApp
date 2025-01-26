import HistoryCard from "./HistoryCard";

type HistoryListProps = {
  history: Array<{
    id: string;
    city: string;
    country: string;
    currentWeather: string;
    feelsLike: number;
  }>;
  onRemove: (id: string) => void;
};

export const HistoryList = ({ history, onRemove }: HistoryListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {history.slice(0, 3).map((item) => (
        <HistoryCard key={item.id} data={item} onRemove={onRemove} />
      ))}
    </div>
  );
};
