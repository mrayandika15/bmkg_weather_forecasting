const db = require("../../../config/database");

const location = {
  location_id: "32.11.16.2010", // Original adm4 code with dots
  subdistrict_name: "Pasirbiru",
  district_name: "Rancakalong",
  city_name: "Sumedang",
  province_name: "Jawa Barat",
  latitude: -6.8504028713,
  longitude: 107.8380603944,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pasirbiru...");

    await db.query(
      `INSERT INTO forecasting.dim_location 
      (location_id, subdistrict_name, district_name, city_name, province_name, latitude, longitude, timezone) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (location_id) DO NOTHING`,
      [
        location.location_id,
        location.subdistrict_name,
        location.district_name,
        location.city_name,
        location.province_name,
        location.latitude,
        location.longitude,
        location.timezone,
      ]
    );

    console.log("Location Pasirbiru seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pasirbiru:", error);
    throw error;
  }
}

module.exports = seedLocation;
