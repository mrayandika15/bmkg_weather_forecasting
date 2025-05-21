const db = require("../../../config/database");

const location = {
  location_id: "32.13.11.2009", // Original adm4 code with dots
  subdistrict_name: "Mulyasari",
  district_name: "Pamanukan",
  city_name: "Subang",
  province_name: "Jawa Barat",
  latitude: -6.2868808581,
  longitude: 107.8298916499,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Mulyasari...");

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

    console.log("Location Mulyasari seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Mulyasari:", error);
    throw error;
  }
}

module.exports = seedLocation;
