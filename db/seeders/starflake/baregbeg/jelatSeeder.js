const db = require("../../../config/database");

const location = {
  location_id: "32.07.32.2007", // Original adm4 code with dots
  subdistrict_name: "Jelat",
  district_name: "Baregbeg",
  city_name: "Ciamis",
  province_name: "Jawa Barat",
  latitude: -7.2816457698,
  longitude: 108.3790846825,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Jelat...");

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

    console.log("Location Jelat seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Jelat:", error);
    throw error;
  }
}

module.exports = seedLocation;
