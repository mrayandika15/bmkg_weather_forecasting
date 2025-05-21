const db = require("../../../config/database");

const location = {
  location_id: "32.09.08.2002", // Original adm4 code with dots
  subdistrict_name: "Susukan Lebak",
  district_name: "Susukan Lebak",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.869911922,
  longitude: 108.6122015733,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Susukan Lebak...");

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

    console.log("Location Susukan Lebak seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Susukan Lebak:", error);
    throw error;
  }
}

module.exports = seedLocation;
