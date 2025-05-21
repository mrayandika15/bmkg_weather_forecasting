const db = require("../../../config/database");

const location = {
  location_id: "32.09.21.2008", // Original adm4 code with dots
  subdistrict_name: "Wanakaya",
  district_name: "Gunung Jati",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.6630020738,
  longitude: 108.5408111282,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Wanakaya...");

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

    console.log("Location Wanakaya seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Wanakaya:", error);
    throw error;
  }
}

module.exports = seedLocation;
