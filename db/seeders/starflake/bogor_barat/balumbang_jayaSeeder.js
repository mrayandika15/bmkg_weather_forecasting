const db = require("../../../config/database");

const location = {
  location_id: "32.71.04.1005", // Original adm4 code with dots
  subdistrict_name: "Balumbang Jaya",
  district_name: "Bogor Barat",
  city_name: "Kota Bogor",
  province_name: "Jawa Barat",
  latitude: -6.5598836726,
  longitude: 106.7400004366,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Balumbang Jaya...");

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

    console.log("Location Balumbang Jaya seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Balumbang Jaya:", error);
    throw error;
  }
}

module.exports = seedLocation;
