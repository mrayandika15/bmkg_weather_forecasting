const db = require("../../../config/database");

const location = {
  location_id: "32.18.06.2005", // Original adm4 code with dots
  subdistrict_name: "Jangraga",
  district_name: "Mangunjaya",
  city_name: "Pangandaran",
  province_name: "Jawa Barat",
  latitude: -7.4861124044,
  longitude: 108.6766136154,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Jangraga...");

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

    console.log("Location Jangraga seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Jangraga:", error);
    throw error;
  }
}

module.exports = seedLocation;
