const db = require("../../../config/database");

const location = {
  location_id: "32.10.03.2015", // Original adm4 code with dots
  subdistrict_name: "Cilangcang",
  district_name: "Cikijing",
  city_name: "Majalengka",
  province_name: "Jawa Barat",
  latitude: -6.9910713198,
  longitude: 108.3677386361,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cilangcang...");

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

    console.log("Location Cilangcang seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cilangcang:", error);
    throw error;
  }
}

module.exports = seedLocation;
