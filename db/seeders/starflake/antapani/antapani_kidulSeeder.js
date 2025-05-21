const db = require("../../../config/database");

const location = {
  location_id: "32.73.20.1005", // Original adm4 code with dots
  subdistrict_name: "Antapani Kidul",
  district_name: "Antapani",
  city_name: "Kota Bandung",
  province_name: "Jawa Barat",
  latitude: -6.923232805,
  longitude: 107.6598460341,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Antapani Kidul...");

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

    console.log("Location Antapani Kidul seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Antapani Kidul:", error);
    throw error;
  }
}

module.exports = seedLocation;
