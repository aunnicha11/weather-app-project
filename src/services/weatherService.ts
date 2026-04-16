export async function getWeather(city: string) {
  try {
    // 1. แปลงชื่อเมือง → latitude, longitude
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );

    if (!geoRes.ok) {
      throw new Error("Failed to fetch geocoding data");
    }

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude, name } = geoData.results[0];

    // 2. ดึงข้อมูลอากาศ
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    if (!weatherRes.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const weatherData = await weatherRes.json();

    // 3. คืนค่าที่ต้องใช้
    return {
        city: name,
        temperature: weatherData.current_weather.temperature,
        weatherCode: weatherData.current_weather.weathercode,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}