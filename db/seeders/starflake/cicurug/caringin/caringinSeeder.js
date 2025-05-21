const db = require("../../../../config/database");

const location = {
  location_id: "32.02.16.2008", // Original adm4 code with dots
  subdistrict_name: "Caringin",
  district_name: "Cicurug",
  city_name: "Sukabumi",
  province_name: "Jawa Barat",
  latitude: -6.7827408031,
  longitude: 106.7681701342,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Caringin...");

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

    console.log("Location Caringin seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Caringin:", error);
    throw error;
  }
}

module.exports = seedLocation;
