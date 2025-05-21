const db = require("../../../config/database");

const location = {
  location_id: "32.15.12.2006", // Original adm4 code with dots
  subdistrict_name: "Tanjungbungin",
  district_name: "Pakisjaya",
  city_name: "Karawang",
  province_name: "Jawa Barat",
  latitude: -6.0004507676,
  longitude: 107.1018872293,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Tanjungbungin...");

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

    console.log("Location Tanjungbungin seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Tanjungbungin:", error);
    throw error;
  }
}

module.exports = seedLocation;
