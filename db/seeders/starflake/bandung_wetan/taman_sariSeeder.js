const db = require("../../../config/database");

const location = {
  location_id: "32.73.09.1002", // Original adm4 code with dots
  subdistrict_name: "Taman Sari",
  district_name: "Bandung Wetan",
  city_name: "Kota Bandung",
  province_name: "Jawa Barat",
  latitude: -6.901521399,
  longitude: 107.6072593149,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Taman Sari...");

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

    console.log("Location Taman Sari seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Taman Sari:", error);
    throw error;
  }
}

module.exports = seedLocation;
