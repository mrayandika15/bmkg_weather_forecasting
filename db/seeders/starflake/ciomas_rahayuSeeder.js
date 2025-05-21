const db = require("../../config/database");

const location = {
  location_id: "32.01.29.2011", // Original adm4 code with dots
  subdistrict_name: "Ciomas Rahayu",
  district_name: "Ciomas",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.5931899005,
  longitude: 106.7648522256,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Ciomas Rahayu...");

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

    console.log("Location Ciomas Rahayu seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Ciomas Rahayu:", error);
    throw error;
  }
}

module.exports = seedLocation;
