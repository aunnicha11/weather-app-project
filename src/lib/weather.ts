type ForecastParams =
  | string
  | { latitude: number; longitude: number };

type ForecastDay = {
  date: string;
  max: number;
  min: number;
  weathercode: number;
};

export async function get7DayForecast(params: ForecastParams) {
  let latitude: number;
  let longitude: number;
  let cityName = "Unknown";

  // ✅ city → lat/lon
    if (typeof params === "string") {
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${params}&count=1`
        );

    if (!geoRes.ok) {
      throw new Error("Geocoding failed");
    }

    const geoData = await geoRes.json();

    if (!geoData.results?.length) {
      throw new Error("City not found");
    }

    latitude = geoData.results[0].latitude;
    longitude = geoData.results[0].longitude;
    cityName = geoData.results[0].name;
  } else {
    latitude = params.latitude;
    longitude = params.longitude;
    cityName = "Current Location";
  }

  // ✅ fetch forecast
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=7&timezone=auto`
  );

  if (!res.ok) {
    throw new Error("Forecast fetch failed");
  }

  const data = await res.json();

  // ✅ validate data
  if (!data.daily || !data.daily.time) {
    throw new Error("Invalid forecast data");
  }

  const daily = data.daily;

  // ✅ transform
  type ForecastDay = {
  date: string;
  max: number;
  min: number;
  weathercode: number;
};

const forecastArray: ForecastDay[] = daily.time
  .map((date: string, index: number) => {
    const max = daily.temperature_2m_max?.[index];
    const min = daily.temperature_2m_min?.[index];

    if (max == null || min == null) return null;

    return {
      date,
      max,
      min,
      weathercode: daily.weathercode?.[index] ?? 0,
    };
  })
.filter((item: any) => item !== null);

  return {
    city: cityName,
    forecast: forecastArray,
  };
}