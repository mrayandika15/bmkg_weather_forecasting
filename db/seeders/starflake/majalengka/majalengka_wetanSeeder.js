const db = require("../../../config/database");

const location = {
  location_id: "32.10.07.1007", // Original adm4 code with dots
  subdistrict_name: "Majalengka Wetan",
  district_name: "Majalengka",
  city_name: "Majalengka",
  province_name: "Jawa Barat",
  latitude: -6.8342872066,
  longitude: 108.2325955233,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Majalengka Wetan...");

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

    console.log("Location Majalengka Wetan seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Majalengka Wetan:", error);
    throw error;
  }
}

module.exports = seedLocation;
