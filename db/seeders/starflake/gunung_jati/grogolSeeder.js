const db = require("../../../config/database");

const location = {
  location_id: "32.09.21.2009", // Original adm4 code with dots
  subdistrict_name: "Grogol",
  district_name: "Gunung Jati",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.6575924555,
  longitude: 108.5362638193,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Grogol...");

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

    console.log("Location Grogol seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Grogol:", error);
    throw error;
  }
}

module.exports = seedLocation;
