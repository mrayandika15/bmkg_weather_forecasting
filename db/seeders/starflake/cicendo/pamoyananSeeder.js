const db = require("../../../config/database");

const location = {
  location_id: "32.73.06.1005", // Original adm4 code with dots
  subdistrict_name: "Pamoyanan",
  district_name: "Cicendo",
  city_name: "Kota Bandung",
  province_name: "Jawa Barat",
  latitude: -6.9030580436,
  longitude: 107.5938956324,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pamoyanan...");

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

    console.log("Location Pamoyanan seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pamoyanan:", error);
    throw error;
  }
}

module.exports = seedLocation;
