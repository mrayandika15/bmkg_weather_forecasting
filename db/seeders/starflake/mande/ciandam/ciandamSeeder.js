const db = require("../../../../config/database");

const location = {
  location_id: "32.03.08.2007", // Original adm4 code with dots
  subdistrict_name: "Ciandam",
  district_name: "Mande",
  city_name: "Cianjur",
  province_name: "Jawa Barat",
  latitude: -6.7449180774,
  longitude: 107.1716775546,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Ciandam...");

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

    console.log("Location Ciandam seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Ciandam:", error);
    throw error;
  }
}

module.exports = seedLocation;
