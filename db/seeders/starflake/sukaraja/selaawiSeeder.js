const db = require("../../../config/database");

const location = {
  location_id: "32.02.33.2002", // Original adm4 code with dots
  subdistrict_name: "Selaawi",
  district_name: "Sukaraja",
  city_name: "Sukabumi",
  province_name: "Jawa Barat",
  latitude: -6.8968929635,
  longitude: 106.9888107192,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Selaawi...");

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

    console.log("Location Selaawi seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Selaawi:", error);
    throw error;
  }
}

module.exports = seedLocation;
