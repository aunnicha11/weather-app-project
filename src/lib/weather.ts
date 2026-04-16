export type DailyForecast = {
  date: string;
  temp_max: number;
  temp_min: number;
  weathercode: number;
};

export async function get7DayForecast(city: string) {
  try {
    // 1. แปลงชื่อเมือง → lat/lon
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude, name } = geoData.results[0];

    // 2. ดึง forecast 7 วัน
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );

    const weatherData = await weatherRes.json();

    const forecast: DailyForecast[] = weatherData.daily.time.map(
      (date: string, i: number) => ({
        date,
        temp_max: weatherData.daily.temperature_2m_max[i],
        temp_min: weatherData.daily.temperature_2m_min[i],
        weathercode: weatherData.daily.weathercode[i],
      })
    );

    return {
      city: name,
      forecast: forecast.slice(0, 7),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}