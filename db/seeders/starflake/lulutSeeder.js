const db = require("../../config/database");

const location = {
  location_id: "32.01.32.2004", // Original adm4 code with dots
  subdistrict_name: "Lulut",
  district_name: "Klapanunggal",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.4920310221,
  longitude: 106.9154280097,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Lulut...");

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

    console.log("Location Lulut seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Lulut:", error);
    throw error;
  }
}

module.exports = seedLocation;
