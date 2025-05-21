const db = require("../../../config/database");

const location = {
  location_id: "32.06.38.2007", // Original adm4 code with dots
  subdistrict_name: "Nanggewer",
  district_name: "Pagerageung",
  city_name: "Tasikmalaya",
  province_name: "Jawa Barat",
  latitude: -7.0780581197,
  longitude: 108.1570936695,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Nanggewer...");

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

    console.log("Location Nanggewer seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Nanggewer:", error);
    throw error;
  }
}

module.exports = seedLocation;
