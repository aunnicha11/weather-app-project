"use client";

interface Props {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBox({ city, setCity, onSearch }: Props) {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Go</button>
    </div>
  );
}