const db = require("../../../config/database");

const location = {
  location_id: "32.76.06.1004", // Original adm4 code with dots
  subdistrict_name: "Kemiri Muka",
  district_name: "Beji",
  city_name: "Kota Depok",
  province_name: "Jawa Barat",
  latitude: -6.3809789367,
  longitude: 106.8309084829,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kemiri Muka...");

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

    console.log("Location Kemiri Muka seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kemiri Muka:", error);
    throw error;
  }
}

module.exports = seedLocation;
