const db = require("../../../config/database");

const location = {
  location_id: "32.07.08.2012", // Original adm4 code with dots
  subdistrict_name: "Hujungtiwu",
  district_name: "Panjalu",
  city_name: "Ciamis",
  province_name: "Jawa Barat",
  latitude: -7.0926540805,
  longitude: 108.2592603359,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Hujungtiwu...");

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

    console.log("Location Hujungtiwu seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Hujungtiwu:", error);
    throw error;
  }
}

module.exports = seedLocation;
