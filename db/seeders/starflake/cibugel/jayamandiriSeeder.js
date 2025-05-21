const db = require("../../../config/database");

const location = {
  location_id: "32.11.04.2007", // Original adm4 code with dots
  subdistrict_name: "Jayamandiri",
  district_name: "Cibugel",
  city_name: "Sumedang",
  province_name: "Jawa Barat",
  latitude: -6.9836676359,
  longitude: 108.0348811944,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Jayamandiri...");

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

    console.log("Location Jayamandiri seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Jayamandiri:", error);
    throw error;
  }
}

module.exports = seedLocation;
