const db = require("../../../config/database");

const location = {
  location_id: "32.04.37.2020", // Original adm4 code with dots
  subdistrict_name: "Parungserab",
  district_name: "Soreang",
  city_name: "Bandung",
  province_name: "Jawa Barat",
  latitude: -7.0117093376,
  longitude: 107.5317918948,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Parungserab...");

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

    console.log("Location Parungserab seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Parungserab:", error);
    throw error;
  }
}

module.exports = seedLocation;
