const db = require("../../../../config/database");

const location = {
  location_id: "32.01.16.2007", // Original adm4 code with dots
  subdistrict_name: "Cimanggu I",
  district_name: "Cibungbulang",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.562168889,
  longitude: 106.6655510449,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cimanggu I...");

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

    console.log("Location Cimanggu I seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cimanggu I:", error);
    throw error;
  }
}

module.exports = seedLocation;
