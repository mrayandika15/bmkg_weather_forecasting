const db = require("../../../config/database");

const location = {
  location_id: "32.13.13.2002", // Original adm4 code with dots
  subdistrict_name: "Muara",
  district_name: "Blanakan",
  city_name: "Subang",
  province_name: "Jawa Barat",
  latitude: -6.262342201,
  longitude: 107.699586331,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Muara...");

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

    console.log("Location Muara seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Muara:", error);
    throw error;
  }
}

module.exports = seedLocation;
