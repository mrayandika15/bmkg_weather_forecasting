const db = require("../../config/database");

const location = {
  location_id: "32.01.24.2006", // Original adm4 code with dots
  subdistrict_name: "Telukpinang",
  district_name: "Ciawi",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.6819229388,
  longitude: 106.8515725106,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Telukpinang...");

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

    console.log("Location Telukpinang seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Telukpinang:", error);
    throw error;
  }
}

module.exports = seedLocation;
