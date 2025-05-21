const db = require("../../../config/database");

const location = {
  location_id: "32.76.09.1004", // Original adm4 code with dots
  subdistrict_name: "Pangkalan Jati Baru",
  district_name: "Cinere",
  city_name: "Kota Depok",
  province_name: "Jawa Barat",
  latitude: -6.3228766342,
  longitude: 106.8023227788,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pangkalan Jati Baru...");

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

    console.log("Location Pangkalan Jati Baru seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pangkalan Jati Baru:", error);
    throw error;
  }
}

module.exports = seedLocation;
