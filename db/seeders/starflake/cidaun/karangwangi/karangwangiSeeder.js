const db = require("../../../../config/database");

const location = {
  location_id: "32.03.23.2009", // Original adm4 code with dots
  subdistrict_name: "Karangwangi",
  district_name: "Cidaun",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -7.4733430753,
  longitude: 107.4045252007,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Karangwangi...");

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

    console.log("Location Karangwangi seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Karangwangi:", error);
    throw error;
  }
}

module.exports = seedLocation;
