const db = require("../../../config/database");

const location = {
  location_id: "32.03.03.2018", // Original adm4 code with dots
  subdistrict_name: "Salamnunggal",
  district_name: "Cibeber",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -6.8976194206,
  longitude: 107.2050624925,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Salamnunggal...");

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

    console.log("Location Salamnunggal seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Salamnunggal:", error);
    throw error;
  }
}

module.exports = seedLocation;
