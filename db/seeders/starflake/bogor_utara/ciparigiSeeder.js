const db = require("../../../config/database");

const location = {
  location_id: "32.71.05.1004", // Original adm4 code with dots
  subdistrict_name: "Ciparigi",
  district_name: "Bogor Utara",
  city_name: "Kota Bogor",
  province_name: "Jawa Barat",
  latitude: -6.5458306648,
  longitude: 106.8166368552,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Ciparigi...");

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

    console.log("Location Ciparigi seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Ciparigi:", error);
    throw error;
  }
}

module.exports = seedLocation;
