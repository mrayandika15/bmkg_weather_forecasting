const db = require("../../../config/database");

const location = {
  location_id: "32.14.10.2006", // Original adm4 code with dots
  subdistrict_name: "Pasawahankidul",
  district_name: "Pasawahan",
  city_name: "Purwakarta",
  province_name: "Jawa Barat",
  latitude: -6.5890382738,
  longitude: 107.4787002616,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pasawahankidul...");

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

    console.log("Location Pasawahankidul seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pasawahankidul:", error);
    throw error;
  }
}

module.exports = seedLocation;
