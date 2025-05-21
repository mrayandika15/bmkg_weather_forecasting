const db = require("../../../config/database");

const location = {
  location_id: "32.06.21.2003", // Original adm4 code with dots
  subdistrict_name: "Karang Layung",
  district_name: "Karangjaya",
  city_name: "Tasikmalaya",
  province_name: "Jawa Barat",
  latitude: -7.4305701382,
  longitude: 108.3695987848,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Karang Layung...");

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

    console.log("Location Karang Layung seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Karang Layung:", error);
    throw error;
  }
}

module.exports = seedLocation;
