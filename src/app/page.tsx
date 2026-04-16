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
        if (!navigator.geolocation) {
          throw new Error("No geolocation");
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // 🔥 ใช้ lat/lon ตรง (แนะนำ)
            const data = await get7DayForecast({ latitude, longitude });
            setForecast(data);
          },
          async () => {
            // ❌ user deny → fallback Bangkok
            const data = await get7DayForecast("Bangkok");
            setForecast(data);
          }
        );
      } catch (error) {
        const data = await get7DayForecast("Bangkok");
        setForecast(data);
      }
    };

    fetchForecast();
  }, []);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);

    try {
      const weatherData = await getWeather(city);
      setResult(weatherData);

      //update forecast
      const forecastData = await get7DayForecast(city);
      setForecast(forecastData);

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

        {/* เช็คก่อน render */}
        {forecast ? (
          <ForecastCard city={forecast.city} data={forecast.forecast} />
        ) : (
          <p>Loading forecast...</p>
        )}
      </div>
    </div>
  );
}