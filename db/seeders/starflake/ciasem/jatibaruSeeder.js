const db = require("../../../config/database");

const location = {
  location_id: "32.13.09.2009", // Original adm4 code with dots
  subdistrict_name: "Jatibaru",
  district_name: "Ciasem",
  city_name: "Subang",
  province_name: "Jawa Barat",
  latitude: -6.3427290744,
  longitude: 107.7284976049,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Jatibaru...");

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

    console.log("Location Jatibaru seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Jatibaru:", error);
    throw error;
  }
}

module.exports = seedLocation;
