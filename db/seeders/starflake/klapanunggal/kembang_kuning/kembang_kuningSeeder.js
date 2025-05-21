const db = require("../../../../config/database");

const location = {
  location_id: "32.01.32.2006", // Original adm4 code with dots
  subdistrict_name: "Kembang Kuning",
  district_name: "Klapanunggal",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.4494979001,
  longitude: 106.9388737576,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kembang Kuning...");

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

    console.log("Location Kembang Kuning seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kembang Kuning:", error);
    throw error;
  }
}

module.exports = seedLocation;
