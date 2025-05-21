const db = require("../../../config/database");

const location = {
  location_id: "32.09.07.2006", // Original adm4 code with dots
  subdistrict_name: "Lemahabang Kulon",
  district_name: "Lemahabang",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.8241460035,
  longitude: 108.6259769041,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Lemahabang Kulon...");

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

    console.log("Location Lemahabang Kulon seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Lemahabang Kulon:", error);
    throw error;
  }
}

module.exports = seedLocation;
