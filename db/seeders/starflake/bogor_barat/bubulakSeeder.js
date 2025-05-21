const db = require("../../../config/database");

const location = {
  location_id: "32.71.04.1003", // Original adm4 code with dots
  subdistrict_name: "Bubulak",
  district_name: "Bogor Barat",
  city_name: "Kota Bogor",
  province_name: "Jawa Barat",
  latitude: -6.5624525278,
  longitude: 106.7543822056,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Bubulak...");

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

    console.log("Location Bubulak seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Bubulak:", error);
    throw error;
  }
}

module.exports = seedLocation;
