const db = require('/Users/muhammadrayandika/projects/bmkg_weather_forecasting/config/database');
const weatherData = [
  {
    "weather_id": 3,
    "weather_desc": "Berawan",
    "weather_desc_en": "Mostly Cloudy",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/berawan-am.svg"
  },
  {
    "weather_id": 2,
    "weather_desc": "Cerah Berawan",
    "weather_desc_en": "Partly Cloudy",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/cerah berawan-am.svg"
  },
  {
    "weather_id": 1,
    "weather_desc": "Cerah",
    "weather_desc_en": "Sunny",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/cerah-pm.svg"
  },
  {
    "weather_id": 61,
    "weather_desc": "Hujan Ringan",
    "weather_desc_en": "Light Rain",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/hujan ringan-am.svg"
  },
  {
    "weather_id": 0,
    "weather_desc": "Cerah",
    "weather_desc_en": "Sunny",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/cerah-pm.svg"
  },
  {
    "weather_id": 63,
    "weather_desc": "Hujan Sedang",
    "weather_desc_en": "Moderate Rain",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/hujan sedang-am.svg"
  },
  {
    "weather_id": 10,
    "weather_desc": "Udara Kabur",
    "weather_desc_en": "Mist/Haze",
    "image_url": "https://api-apps.bmkg.go.id/storage/icon/cuaca/udara kabur.svg"
  }
];
async function seedWeather() {
  try {
    console.log(`Starting to seed ${weatherData.length} weather conditions for snowflake schema...`);
    for (const weather of weatherData) {
      await db.query(`INSERT INTO forecasting.dim_weather (weather_condition_id, weather_desc, weather_desc_en, image_url) VALUES ($1, $2, $3, $4) ON CONFLICT (weather_condition_id) DO NOTHING`, [weather.weather_id, weather.weather_desc, weather.weather_desc_en, weather.image_url]);
    }
    console.log('Weather conditions seeded successfully!');
  } catch (error) {
    console.error('Error seeding weather conditions:', error);
    throw error;
  }
}
module.exports = seedWeather;