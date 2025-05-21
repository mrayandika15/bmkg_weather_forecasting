const db = require("../../../config/database");

const location = {
  location_id: "32.03.07.2015", // Original adm4 code with dots
  subdistrict_name: "Sukajadi",
  district_name: "Karangtengah",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -6.7690640585,
  longitude: 107.2367331396,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sukajadi...");

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

    console.log("Location Sukajadi seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sukajadi:", error);
    throw error;
  }
}

module.exports = seedLocation;
