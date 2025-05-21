const db = require("../../../config/database");

const location = {
  location_id: "32.03.13.2009", // Original adm4 code with dots
  subdistrict_name: "Kubang",
  district_name: "Sukaresmi",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -6.6877373214,
  longitude: 107.1081572673,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kubang...");

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

    console.log("Location Kubang seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kubang:", error);
    throw error;
  }
}

module.exports = seedLocation;
