const db = require("../../../config/database");

const location = {
  location_id: "32.05.13.2003", // Original adm4 code with dots
  subdistrict_name: "Sukamerang",
  district_name: "Kersamanah",
  city_name: "Garut",
  province_name: "Jawa Barat",
  latitude: -7.0510474495,
  longitude: 108.0089425715,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sukamerang...");

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

    console.log("Location Sukamerang seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sukamerang:", error);
    throw error;
  }
}

module.exports = seedLocation;
