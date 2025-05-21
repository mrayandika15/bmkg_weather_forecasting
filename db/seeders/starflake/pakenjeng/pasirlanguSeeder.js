const db = require("../../../config/database");

const location = {
  location_id: "32.05.33.2006", // Original adm4 code with dots
  subdistrict_name: "Pasirlangu",
  district_name: "Pakenjeng",
  city_name: "Garut",
  province_name: "Jawa Barat",
  latitude: -7.4623885278,
  longitude: 107.6421788913,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pasirlangu...");

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

    console.log("Location Pasirlangu seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pasirlangu:", error);
    throw error;
  }
}

module.exports = seedLocation;
