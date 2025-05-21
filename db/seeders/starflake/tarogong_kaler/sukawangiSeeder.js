const db = require("../../../config/database");

const location = {
  location_id: "32.05.04.2005", // Original adm4 code with dots
  subdistrict_name: "Sukawangi",
  district_name: "Tarogong Kaler",
  city_name: "Garut",
  province_name: "Jawa Barat",
  latitude: -7.1731369492,
  longitude: 107.8398778074,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sukawangi...");

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

    console.log("Location Sukawangi seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sukawangi:", error);
    throw error;
  }
}

module.exports = seedLocation;
