const db = require("../../../config/database");

const location = {
  location_id: "32.74.01.1001", // Original adm4 code with dots
  subdistrict_name: "Kejaksan",
  district_name: "Kejaksan",
  city_name: "Kota Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.7125072462,
  longitude: 108.5581960789,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kejaksan...");

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

    console.log("Location Kejaksan seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kejaksan:", error);
    throw error;
  }
}

module.exports = seedLocation;
