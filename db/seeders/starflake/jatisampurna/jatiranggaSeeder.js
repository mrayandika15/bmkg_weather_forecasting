const db = require("../../../config/database");

const location = {
  location_id: "32.75.10.1004", // Original adm4 code with dots
  subdistrict_name: "Jatirangga",
  district_name: "Jatisampurna",
  city_name: "Kota Bekasi",
  province_name: "Jawa Barat",
  latitude: -6.3637328182,
  longitude: 106.937748211,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Jatirangga...");

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

    console.log("Location Jatirangga seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Jatirangga:", error);
    throw error;
  }
}

module.exports = seedLocation;
