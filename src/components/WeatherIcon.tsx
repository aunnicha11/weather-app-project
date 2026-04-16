interface Props {
  weatherCode: number;
}

export default function WeatherIcon({ weatherCode }: Props) {
  // simple mapping (Open-Meteo weather codes)
  if (weatherCode === 0) return <span>☀️</span>;
  if (weatherCode <= 3) return <span>⛅</span>;
  if (weatherCode <= 48) return <span>🌫️</span>;
  if (weatherCode <= 67) return <span>🌧️</span>;
  if (weatherCode <= 77) return <span>❄️</span>;
  if (weatherCode <= 99) return <span>⛈️</span>;

  return <span>🌍</span>;
}