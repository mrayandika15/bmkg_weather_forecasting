const db = require("../../../config/database");

const location = {
  location_id: "32.14.05.2009", // Original adm4 code with dots
  subdistrict_name: "Tajursindang",
  district_name: "Sukatani",
  city_name: "Purwakarta",
  province_name: "Jawa Barat",
  latitude: -6.5773106779,
  longitude: 107.3905416258,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Tajursindang...");

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

    console.log("Location Tajursindang seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Tajursindang:", error);
    throw error;
  }
}

module.exports = seedLocation;
