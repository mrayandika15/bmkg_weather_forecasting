const db = require("../../../config/database");

const location = {
  location_id: "32.12.06.2020", // Original adm4 code with dots
  subdistrict_name: "Tegalgirang",
  district_name: "Bangodua",
  city_name: "Indramayu",
  province_name: "Jawa Barat",
  latitude: -6.50119461,
  longitude: 108.2918155379,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Tegalgirang...");

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

    console.log("Location Tegalgirang seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Tegalgirang:", error);
    throw error;
  }
}

module.exports = seedLocation;
