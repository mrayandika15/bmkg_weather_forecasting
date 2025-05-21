const db = require("../../config/database");

const location = {
  location_id: "32.03.26.2006", // Original adm4 code with dots
  subdistrict_name: "Cisaranten",
  district_name: "Cikadu",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -7.2943783817,
  longitude: 107.2669348163,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cisaranten...");

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

    console.log("Location Cisaranten seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cisaranten:", error);
    throw error;
  }
}

module.exports = seedLocation;
