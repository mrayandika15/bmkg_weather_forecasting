const db = require("../../../config/database");

const location = {
  location_id: "32.16.23.2003", // Original adm4 code with dots
  subdistrict_name: "Bojongmangu",
  district_name: "Bojongmangu",
  city_name: "Bekasi",
  province_name: "Jawa Barat",
  latitude: -6.4417009281,
  longitude: 107.1922851188,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Bojongmangu...");

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

    console.log("Location Bojongmangu seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Bojongmangu:", error);
    throw error;
  }
}

module.exports = seedLocation;
