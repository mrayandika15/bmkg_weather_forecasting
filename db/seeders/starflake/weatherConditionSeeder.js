const db = require("../../config/database");

const weatherConditions = [
  {
    weather_condition_id: 1,
    description_id: "Cerah",
    description_en: "Sunny",
  },
  {
    weather_condition_id: 2,
    description_id: "Cerah Berawan",
    description_en: "Partly Cloudy",
  },
  {
    weather_condition_id: 3,
    description_id: "Berawan",
    description_en: "Mostly Cloudy",
  },
  {
    weather_condition_id: 61,
    description_id: "Hujan Ringan",
    description_en: "Light Rain",
  },
];

async function seedWeatherConditions() {
  try {
    console.log("Seeding weather conditions...");

    for (const condition of weatherConditions) {
      await db.query(
        `INSERT INTO forecasting.dim_weather_condition 
        (weather_condition_id, description_id, description_en) 
        VALUES ($1, $2, $3)
        ON CONFLICT (weather_condition_id) DO NOTHING`,
        [
          condition.weather_condition_id,
          condition.description_id,
          condition.description_en,
        ]
      );
    }

    console.log("Weather conditions seeded successfully!");
  } catch (error) {
    console.error("Error seeding weather conditions:", error);
    throw error;
  }
}

module.exports = seedWeatherConditions;
