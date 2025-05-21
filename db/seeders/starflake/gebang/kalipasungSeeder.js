const db = require("../../../config/database");

const location = {
  location_id: "32.09.30.2006", // Original adm4 code with dots
  subdistrict_name: "Kalipasung",
  district_name: "Gebang",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.8167545473,
  longitude: 108.7055019807,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kalipasung...");

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

    console.log("Location Kalipasung seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kalipasung:", error);
    throw error;
  }
}

module.exports = seedLocation;
