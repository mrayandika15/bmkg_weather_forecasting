const db = require("../../../config/database");

const location = {
  location_id: "32.06.12.2008", // Original adm4 code with dots
  subdistrict_name: "Sepatnunggal",
  district_name: "Sodonghilir",
  city_name: "Tasikmalaya",
  province_name: "Jawa Barat",
  latitude: -7.5154932436,
  longitude: 108.0657684625,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sepatnunggal...");

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

    console.log("Location Sepatnunggal seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sepatnunggal:", error);
    throw error;
  }
}

module.exports = seedLocation;
