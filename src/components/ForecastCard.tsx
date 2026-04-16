"use client";

import { getWeatherIcon } from "@/utils/weatherCode";

type Props = {
  city: string;
  data: {
    date: string;
    max: number;
    min: number;
    weathercode: number;
  }[];
};

export default function ForecastCard({ city, data }: Props) {
  return (
    <div className="forecast-container">
    <h2 className="forecast-title">
        {city} • 7-Day Forecast
    </h2>

    <div className="forecast-grid">
        {data.map((day) => (
        <div key={day.date} className="forecast-card">
            <p className="day">
            {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
            })}
            </p>

            <p className="date">
            {new Date(day.date).getDate()}
            </p>

            <div className="icon">
            {getWeatherIcon(day.weathercode)}
            </div>

            <div className="temp">
            <span className="max">{Math.round(day.max)}°</span>
            <span className="min">{Math.round(day.min)}°</span>
            </div>
        </div>
        ))}
    </div>
    </div>
  );
}