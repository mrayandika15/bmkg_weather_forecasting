const db = require("../../../../config/database");

const location = {
  location_id: "32.03.13.2008", // Original adm4 code with dots
  subdistrict_name: "Cibanteng",
  district_name: "Sukaresmi",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -6.6816318256,
  longitude: 107.0830268952,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cibanteng...");

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

    console.log("Location Cibanteng seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cibanteng:", error);
    throw error;
  }
}

module.exports = seedLocation;
