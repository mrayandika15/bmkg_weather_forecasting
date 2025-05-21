const db = require("../../../config/database");

const location = {
  location_id: "32.06.38.2008", // Original adm4 code with dots
  subdistrict_name: "Sukapada",
  district_name: "Pagerageung",
  city_name: "Tasikmalaya",
  province_name: "Jawa Barat",
  latitude: -7.0931899733,
  longitude: 108.1482487639,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sukapada...");

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

    console.log("Location Sukapada seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sukapada:", error);
    throw error;
  }
}

module.exports = seedLocation;
