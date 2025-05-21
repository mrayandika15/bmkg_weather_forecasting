const db = require("../../../../config/database");

const location = {
  location_id: "32.03.02.2007", // Original adm4 code with dots
  subdistrict_name: "Cikaroya",
  district_name: "Warungkondang",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -6.8767953441,
  longitude: 107.1021439749,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Cikaroya...");

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

    console.log("Location Cikaroya seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Cikaroya:", error);
    throw error;
  }
}

module.exports = seedLocation;
