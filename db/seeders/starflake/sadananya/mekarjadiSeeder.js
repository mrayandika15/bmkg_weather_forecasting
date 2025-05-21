const db = require("../../../config/database");

const location = {
  location_id: "32.07.04.2008", // Original adm4 code with dots
  subdistrict_name: "Mekarjadi",
  district_name: "Sadananya",
  city_name: "Ciamis",
  province_name: "Jawa Barat",
  latitude: -7.3112424164,
  longitude: 108.3352810319,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Mekarjadi...");

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

    console.log("Location Mekarjadi seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Mekarjadi:", error);
    throw error;
  }
}

module.exports = seedLocation;
