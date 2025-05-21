const db = require("../../config/database");

const location = {
  location_id: "32.01.11.2008", // Original adm4 code with dots
  subdistrict_name: "Cibinong",
  district_name: "Gunung Sindur",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.3947366587,
  longitude: 106.6907131573,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cibinong...");

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

    console.log("Location Cibinong seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cibinong:", error);
    throw error;
  }
}

module.exports = seedLocation;
