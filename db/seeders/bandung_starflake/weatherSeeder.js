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
    console.log(`Starting to seed ${weatherData.length} weather conditions for starflake schema...`);
    let successCount = 0;
    let errorCount = 0;

    for (const weather of weatherData) {
      try {
        console.log(`Seeding weather condition ${weather.weather_desc}...`);

        await db.query(
          `INSERT INTO forecasting.dim_weather
          (weather_condition_id, weather_desc, weather_desc_en, image_url)
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (weather_condition_id) DO NOTHING`,
          [
            weather.weather_id,
            weather.weather_desc,
            weather.weather_desc_en,
            weather.image_url,
          ]
        );

        console.log(`Weather condition ${weather.weather_desc} seeded successfully!`);
        successCount++;
      } catch (error) {
        console.error(`Error seeding weather condition ${weather.weather_desc}:`, error);
        errorCount++;
      }
    }

    console.log("\nWeather Seeder execution summary:");
    console.log(`Total weather conditions: ${weatherData.length}`);
    console.log(`Successfully seeded: ${successCount}`);
    console.log(`Failed: ${errorCount}`);

    if (errorCount > 0) {
      throw new Error(`Failed to seed ${errorCount} weather conditions`);
    }
  } catch (error) {
    console.error("Error in seedWeather:", error);
    throw error;
  }
}

module.exports = seedWeather;
