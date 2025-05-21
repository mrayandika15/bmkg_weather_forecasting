const db = require("../../../config/database");

const location = {
  location_id: "32.14.09.2013", // Original adm4 code with dots
  subdistrict_name: "Taringgul Tonggoh",
  district_name: "Wanayasa",
  city_name: "Purwakarta",
  province_name: "Jawa Barat",
  latitude: -6.6216929214,
  longitude: 107.5330947874,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Taringgul Tonggoh...");

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

    console.log("Location Taringgul Tonggoh seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Taringgul Tonggoh:", error);
    throw error;
  }
}

module.exports = seedLocation;
