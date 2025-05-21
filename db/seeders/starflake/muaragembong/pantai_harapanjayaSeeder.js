const db = require("../../../config/database");

const location = {
  location_id: "32.16.17.2004", // Original adm4 code with dots
  subdistrict_name: "Pantai Harapanjaya",
  district_name: "Muaragembong",
  city_name: "Bekasi",
  province_name: "Jawa Barat",
  latitude: -6.0472788603,
  longitude: 107.0480126736,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pantai Harapanjaya...");

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

    console.log("Location Pantai Harapanjaya seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pantai Harapanjaya:", error);
    throw error;
  }
}

module.exports = seedLocation;
