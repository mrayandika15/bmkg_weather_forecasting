const db = require("../../../config/database");

const location = {
  location_id: "32.07.02.2016", // Original adm4 code with dots
  subdistrict_name: "Cimari",
  district_name: "Cikoneng",
  city_name: "Ciamis",
  province_name: "Jawa Barat",
  latitude: -7.3069433227,
  longitude: 108.285305701,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cimari...");

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

    console.log("Location Cimari seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cimari:", error);
    throw error;
  }
}

module.exports = seedLocation;
