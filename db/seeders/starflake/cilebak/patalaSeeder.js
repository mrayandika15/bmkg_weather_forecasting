const db = require("../../../config/database");

const location = {
  location_id: "32.08.25.2005", // Original adm4 code with dots
  subdistrict_name: "Patala",
  district_name: "Cilebak",
  city_name: "Kuningan",
  province_name: "Jawa Barat",
  latitude: -7.1157303397,
  longitude: 108.5866050311,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Patala...");

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

    console.log("Location Patala seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Patala:", error);
    throw error;
  }
}

module.exports = seedLocation;
