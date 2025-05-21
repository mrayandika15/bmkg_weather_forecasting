const db = require("../../../config/database");

const location = {
  location_id: "32.72.05.1004", // Original adm4 code with dots
  subdistrict_name: "Sudajaya Hilir",
  district_name: "Baros",
  city_name: "Kota Sukabumi",
  province_name: "Jawa Barat",
  latitude: -6.9549218882,
  longitude: 106.9217861417,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sudajaya Hilir...");

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

    console.log("Location Sudajaya Hilir seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sudajaya Hilir:", error);
    throw error;
  }
}

module.exports = seedLocation;
