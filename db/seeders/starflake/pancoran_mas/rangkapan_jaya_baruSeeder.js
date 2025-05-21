const db = require("../../../config/database");

const location = {
  location_id: "32.76.01.1010", // Original adm4 code with dots
  subdistrict_name: "Rangkapan Jaya Baru",
  district_name: "Pancoran Mas",
  city_name: "Kota Depok",
  province_name: "Jawa Barat",
  latitude: -6.3986676786,
  longitude: 106.7789954661,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Rangkapan Jaya Baru...");

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

    console.log("Location Rangkapan Jaya Baru seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Rangkapan Jaya Baru:", error);
    throw error;
  }
}

module.exports = seedLocation;
