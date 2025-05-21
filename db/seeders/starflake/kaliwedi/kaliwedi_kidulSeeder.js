const db = require("../../../config/database");

const location = {
  location_id: "32.09.29.2007", // Original adm4 code with dots
  subdistrict_name: "Kaliwedi Kidul",
  district_name: "Kaliwedi",
  city_name: "Cirebon",
  province_name: "Jawa Barat",
  latitude: -6.6017832986,
  longitude: 108.3816019865,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Kaliwedi Kidul...");

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

    console.log("Location Kaliwedi Kidul seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Kaliwedi Kidul:", error);
    throw error;
  }
}

module.exports = seedLocation;
