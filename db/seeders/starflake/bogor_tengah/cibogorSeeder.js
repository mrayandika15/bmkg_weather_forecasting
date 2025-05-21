const db = require("../../../config/database");

const location = {
  location_id: "32.71.03.1004", // Original adm4 code with dots
  subdistrict_name: "Cibogor",
  district_name: "Bogor Tengah",
  city_name: "Kota Bogor",
  province_name: "Jawa Barat",
  latitude: -6.5891061051,
  longitude: 106.7917190518,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cibogor...");

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

    console.log("Location Cibogor seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cibogor:", error);
    throw error;
  }
}

module.exports = seedLocation;
