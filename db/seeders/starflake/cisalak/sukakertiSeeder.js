const db = require("../../../config/database");

const location = {
  location_id: "32.13.02.2005", // Original adm4 code with dots
  subdistrict_name: "Sukakerti",
  district_name: "Cisalak",
  city_name: "Subang",
  province_name: "Jawa Barat",
  latitude: -6.7343625224,
  longitude: 107.7432486556,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sukakerti...");

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

    console.log("Location Sukakerti seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sukakerti:", error);
    throw error;
  }
}

module.exports = seedLocation;
