const db = require("../../../config/database");

const location = {
  location_id: "32.79.04.2003", // Original adm4 code with dots
  subdistrict_name: "Waringinsari",
  district_name: "Langensari",
  city_name: "Kota Banjar",
  province_name: "Jawa Barat",
  latitude: -7.3576445042,
  longitude: 108.6517370169,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Waringinsari...");

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

    console.log("Location Waringinsari seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Waringinsari:", error);
    throw error;
  }
}

module.exports = seedLocation;
