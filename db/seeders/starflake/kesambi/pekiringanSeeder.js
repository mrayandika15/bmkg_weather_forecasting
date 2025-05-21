const db = require("../../../config/database");

const location = {
  location_id: "32.74.05.1001", // Original adm4 code with dots
  subdistrict_name: "Pekiringan",
  district_name: "Kesambi",
  city_name: "Kota Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.7197751186,
  longitude: 108.5525626209,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pekiringan...");

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

    console.log("Location Pekiringan seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pekiringan:", error);
    throw error;
  }
}

module.exports = seedLocation;
