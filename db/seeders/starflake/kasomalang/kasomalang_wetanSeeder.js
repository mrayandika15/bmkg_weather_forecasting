const db = require("../../../config/database");

const location = {
  location_id: "32.13.26.2006", // Original adm4 code with dots
  subdistrict_name: "Kasomalang Wetan",
  district_name: "Kasomalang",
  city_name: "Subang",
  province_name: "Jawa Barat",
  latitude: -6.6942531559,
  longitude: 107.7424224963,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kasomalang Wetan...");

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

    console.log("Location Kasomalang Wetan seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kasomalang Wetan:", error);
    throw error;
  }
}

module.exports = seedLocation;
