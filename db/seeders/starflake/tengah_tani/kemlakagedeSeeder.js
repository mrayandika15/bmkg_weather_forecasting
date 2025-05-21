const db = require("../../../config/database");

const location = {
  location_id: "32.09.35.2004", // Original adm4 code with dots
  subdistrict_name: "Kemlakagede",
  district_name: "Tengah Tani",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.6986589643,
  longitude: 108.530264105,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kemlakagede...");

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

    console.log("Location Kemlakagede seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kemlakagede:", error);
    throw error;
  }
}

module.exports = seedLocation;
