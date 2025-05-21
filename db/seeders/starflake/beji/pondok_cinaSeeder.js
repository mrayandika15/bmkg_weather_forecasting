const db = require("../../../config/database");

const location = {
  location_id: "32.76.06.1005", // Original adm4 code with dots
  subdistrict_name: "Pondok Cina",
  district_name: "Beji",
  city_name: "Kota Depok",
  province_name: "Jawa Barat",
  latitude: -6.3655219343,
  longitude: 106.8321487181,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Pondok Cina...");

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

    console.log("Location Pondok Cina seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Pondok Cina:", error);
    throw error;
  }
}

module.exports = seedLocation;
