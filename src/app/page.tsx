"use client";

import { useState, useEffect } from "react";
import { getWeather } from "@/services/weatherService";

import SearchBox from "@/components/SearchBox";
import WeatherCard from "@/components/WeatherCard";
import ThemeToggle from "@/components/ThemeToggle";
import { get7DayForecast } from "@/lib/weather";
import ForecastCard from "@/components/ForecastCard";

export default function Home() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ✅ fetch forecast ตอน mount
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await get7DayForecast("Bangkok");
        setForecast(data);
      } catch (error) {
        console.error("Forecast error:", error);
      }
    };

    fetchForecast();
  }, []);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);

    try {
      const data = await getWeather(city);
      setResult(data);
    } catch (error) {
      console.error("Weather error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <ThemeToggle />

      <div className="card">
        <h1 className="title">The Weather Live</h1>

        <SearchBox
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        <div className="result">
          {loading && <p className="loading">Loading...</p>}
          {result && !loading && <WeatherCard data={result} />}
        </div>

        {/* ✅ เช็คก่อน render */}
        {forecast ? (
          <ForecastCard city={forecast.city} data={forecast.forecast} />
        ) : (
          <p>Loading forecast...</p>
        )}
      </div>
    </div>
  );
}