import WeatherIcon from "./WeatherIcon";

interface Props {
  data: any;
}

export default function WeatherCard({ data }: Props) {
  if (data.error) {
    return <p className="error">{data.error}</p>;
  }

  return (
    <div className="weatherInfo">
      <h2>{data.city}</h2>
      <div className="icon">
        <WeatherIcon weatherCode={data.weatherCode} />
      </div>
      <p className="temp">{data.temperature}°C</p>
    </div>
  );
}