const db = require("../../config/database");

const location = {
  location_id: "32.02.20.2001", // Original adm4 code with dots
  subdistrict_name: "Waluran",
  district_name: "Waluran",
  city_name: "Sukabumi",
  province_name: "Jawa Barat",
  latitude: -7.2271661337,
  longitude: 106.5967992703,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Waluran...");

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

    console.log("Location Waluran seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Waluran:", error);
    throw error;
  }
}

module.exports = seedLocation;
