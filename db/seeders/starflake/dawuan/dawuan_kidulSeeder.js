const db = require("../../../config/database");

const location = {
  location_id: "32.13.27.2006", // Original adm4 code with dots
  subdistrict_name: "Dawuan Kidul",
  district_name: "Dawuan",
  city_name: "Subang",
  province_name: "Jawa Barat",
  latitude: -6.5529113684,
  longitude: 107.6858098602,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Dawuan Kidul...");

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

    console.log("Location Dawuan Kidul seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Dawuan Kidul:", error);
    throw error;
  }
}

module.exports = seedLocation;
