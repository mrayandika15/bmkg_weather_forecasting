const db = require("../../../config/database");

const location = {
  location_id: "32.14.04.2002", // Original adm4 code with dots
  subdistrict_name: "Palinggihan",
  district_name: "Plered",
  city_name: "Purwakarta",
  province_name: "Jawa Barat",
  latitude: -6.6442943991,
  longitude: 107.3953881955,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Palinggihan...");

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

    console.log("Location Palinggihan seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Palinggihan:", error);
    throw error;
  }
}

module.exports = seedLocation;
