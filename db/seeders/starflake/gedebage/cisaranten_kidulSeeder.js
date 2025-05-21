const db = require("../../../config/database");

const location = {
  location_id: "32.73.27.1002", // Original adm4 code with dots
  subdistrict_name: "Cisaranten Kidul",
  district_name: "Gedebage",
  city_name: "Kota Bandung",
  province_name: "Jawa Barat",
  latitude: -6.9494452742,
  longitude: 107.6930639871,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cisaranten Kidul...");

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

    console.log("Location Cisaranten Kidul seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cisaranten Kidul:", error);
    throw error;
  }
}

module.exports = seedLocation;
