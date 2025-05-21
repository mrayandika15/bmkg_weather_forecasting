const db = require("../../../config/database");

const location = {
  location_id: "32.15.15.2011", // Original adm4 code with dots
  subdistrict_name: "Rawagempol Kulon",
  district_name: "Cilamaya Wetan",
  city_name: "Karawang",
  province_name: "Jawa Barat",
  latitude: -6.2058966737,
  longitude: 107.5667236455,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Rawagempol Kulon...");

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

    console.log("Location Rawagempol Kulon seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Rawagempol Kulon:", error);
    throw error;
  }
}

module.exports = seedLocation;
