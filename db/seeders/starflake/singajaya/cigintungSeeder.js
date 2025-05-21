const db = require("../../../config/database");

const location = {
  location_id: "32.05.24.2008", // Original adm4 code with dots
  subdistrict_name: "Cigintung",
  district_name: "Singajaya",
  city_name: "Garut",
  province_name: "Jawa Barat",
  latitude: -7.4816546693,
  longitude: 107.9186560513,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cigintung...");

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

    console.log("Location Cigintung seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cigintung:", error);
    throw error;
  }
}

module.exports = seedLocation;
