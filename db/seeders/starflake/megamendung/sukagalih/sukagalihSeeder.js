const db = require("../../../../config/database");

const location = {
  location_id: "32.01.26.2008", // Original adm4 code with dots
  subdistrict_name: "Sukagalih",
  district_name: "Megamendung",
  city_name: "Bogor",
  province_name: "Jawa Barat",
  latitude: -6.6987689856,
  longitude: 106.9140697979,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Sukagalih...");

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

    console.log("Location Sukagalih seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Sukagalih:", error);
    throw error;
  }
}

module.exports = seedLocation;
