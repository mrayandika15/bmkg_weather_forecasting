const db = require('/Users/muhammadrayandika/projects/bmkg_weather_forecasting/config/database');
const districts = [
  {
    "district_code": "06",
    "district_name": "Cimenyan",
    "city_code": "32.04"
  },
  {
    "district_code": "07",
    "district_name": "Cilengkrang",
    "city_code": "32.04"
  },
  {
    "district_code": "08",
    "district_name": "Bojongsoang",
    "city_code": "32.04"
  },
  {
    "district_code": "09",
    "district_name": "Margahayu",
    "city_code": "32.04"
  },
  {
    "district_code": "10",
    "district_name": "Margaasih",
    "city_code": "32.04"
  },
  {
    "district_code": "11",
    "district_name": "Katapang",
    "city_code": "32.04"
  },
  {
    "district_code": "12",
    "district_name": "Dayeuhkolot",
    "city_code": "32.04"
  },
  {
    "district_code": "13",
    "district_name": "Banjaran",
    "city_code": "32.04"
  },
  {
    "district_code": "14",
    "district_name": "Pameungpeuk",
    "city_code": "32.04"
  },
  {
    "district_code": "16",
    "district_name": "Arjasari",
    "city_code": "32.04"
  },
  {
    "district_code": "17",
    "district_name": "Cimaung",
    "city_code": "32.04"
  },
  {
    "district_code": "25",
    "district_name": "Cicalengka",
    "city_code": "32.04"
  },
  {
    "district_code": "26",
    "district_name": "Nagreg",
    "city_code": "32.04"
  },
  {
    "district_code": "27",
    "district_name": "Cikancung",
    "city_code": "32.04"
  },
  {
    "district_code": "28",
    "district_name": "Rancaekek",
    "city_code": "32.04"
  },
  {
    "district_code": "29",
    "district_name": "Ciparay",
    "city_code": "32.04"
  },
  {
    "district_code": "30",
    "district_name": "Pacet",
    "city_code": "32.04"
  },
  {
    "district_code": "31",
    "district_name": "Kertasari",
    "city_code": "32.04"
  },
  {
    "district_code": "32",
    "district_name": "Baleendah",
    "city_code": "32.04"
  },
  {
    "district_code": "34",
    "district_name": "Solokanjeruk",
    "city_code": "32.04"
  },
  {
    "district_code": "35",
    "district_name": "Paseh",
    "city_code": "32.04"
  },
  {
    "district_code": "36",
    "district_name": "Ibun",
    "city_code": "32.04"
  },
  {
    "district_code": "37",
    "district_name": "Soreang",
    "city_code": "32.04"
  },
  {
    "district_code": "38",
    "district_name": "Pasirjambu",
    "city_code": "32.04"
  },
  {
    "district_code": "39",
    "district_name": "Ciwidey",
    "city_code": "32.04"
  },
  {
    "district_code": "40",
    "district_name": "Rancabali",
    "city_code": "32.04"
  },
  {
    "district_code": "44",
    "district_name": "Cangkuang",
    "city_code": "32.04"
  },
  {
    "district_code": "46",
    "district_name": "Kutawaringin",
    "city_code": "32.04"
  },
  {
    "district_code": "05",
    "district_name": "Cileunyi",
    "city_code": "32.04"
  },
  {
    "district_code": "15",
    "district_name": "Pangalengan",
    "city_code": "32.04"
  },
  {
    "district_code": "33",
    "district_name": "Majalaya",
    "city_code": "32.04"
  },
  {
    "district_code": "01",
    "district_name": "Lembang",
    "city_code": "32.17"
  },
  {
    "district_code": "02",
    "district_name": "Parongpong",
    "city_code": "32.17"
  },
  {
    "district_code": "03",
    "district_name": "Cisarua",
    "city_code": "32.17"
  },
  {
    "district_code": "05",
    "district_name": "Cipeundeuy",
    "city_code": "32.17"
  },
  {
    "district_code": "06",
    "district_name": "Ngamprah",
    "city_code": "32.17"
  },
  {
    "district_code": "07",
    "district_name": "Cipatat",
    "city_code": "32.17"
  },
  {
    "district_code": "08",
    "district_name": "Padalarang",
    "city_code": "32.17"
  },
  {
    "district_code": "09",
    "district_name": "Batujajar",
    "city_code": "32.17"
  },
  {
    "district_code": "10",
    "district_name": "Cihampelas",
    "city_code": "32.17"
  },
  {
    "district_code": "12",
    "district_name": "Cipongkor",
    "city_code": "32.17"
  },
  {
    "district_code": "13",
    "district_name": "Rongga",
    "city_code": "32.17"
  },
  {
    "district_code": "14",
    "district_name": "Sindangkerta",
    "city_code": "32.17"
  },
  {
    "district_code": "15",
    "district_name": "Gununghalu",
    "city_code": "32.17"
  },
  {
    "district_code": "16",
    "district_name": "Saguling",
    "city_code": "32.17"
  },
  {
    "district_code": "04",
    "district_name": "Cikalongwetan",
    "city_code": "32.17"
  },
  {
    "district_code": "11",
    "district_name": "Cililin",
    "city_code": "32.17"
  },
  {
    "district_code": "01",
    "district_name": "Sukasari",
    "city_code": "32.73"
  },
  {
    "district_code": "02",
    "district_name": "Coblong",
    "city_code": "32.73"
  },
  {
    "district_code": "03",
    "district_name": "Babakan Ciparay",
    "city_code": "32.73"
  },
  {
    "district_code": "04",
    "district_name": "Bojongloa Kaler",
    "city_code": "32.73"
  },
  {
    "district_code": "05",
    "district_name": "Andir",
    "city_code": "32.73"
  },
  {
    "district_code": "06",
    "district_name": "Cicendo",
    "city_code": "32.73"
  },
  {
    "district_code": "07",
    "district_name": "Sukajadi",
    "city_code": "32.73"
  },
  {
    "district_code": "08",
    "district_name": "Cidadap",
    "city_code": "32.73"
  },
  {
    "district_code": "09",
    "district_name": "Bandung Wetan",
    "city_code": "32.73"
  },
  {
    "district_code": "10",
    "district_name": "Astana Anyar",
    "city_code": "32.73"
  },
  {
    "district_code": "11",
    "district_name": "Regol",
    "city_code": "32.73"
  },
  {
    "district_code": "12",
    "district_name": "Batununggal",
    "city_code": "32.73"
  },
  {
    "district_code": "13",
    "district_name": "Lengkong",
    "city_code": "32.73"
  },
  {
    "district_code": "14",
    "district_name": "Cibeunying Kidul",
    "city_code": "32.73"
  },
  {
    "district_code": "15",
    "district_name": "Bandung Kulon",
    "city_code": "32.73"
  },
  {
    "district_code": "16",
    "district_name": "Kiaracondong",
    "city_code": "32.73"
  },
  {
    "district_code": "17",
    "district_name": "Bojongloa Kidul",
    "city_code": "32.73"
  },
  {
    "district_code": "18",
    "district_name": "Cibeunying Kaler",
    "city_code": "32.73"
  },
  {
    "district_code": "19",
    "district_name": "Sumur Bandung",
    "city_code": "32.73"
  },
  {
    "district_code": "20",
    "district_name": "Antapani",
    "city_code": "32.73"
  },
  {
    "district_code": "24",
    "district_name": "Arcamanik",
    "city_code": "32.73"
  },
  {
    "district_code": "25",
    "district_name": "Cibiru",
    "city_code": "32.73"
  },
  {
    "district_code": "26",
    "district_name": "Ujungberung",
    "city_code": "32.73"
  },
  {
    "district_code": "27",
    "district_name": "Gedebage",
    "city_code": "32.73"
  },
  {
    "district_code": "28",
    "district_name": "Panyileukan",
    "city_code": "32.73"
  },
  {
    "district_code": "29",
    "district_name": "Cinambo",
    "city_code": "32.73"
  },
  {
    "district_code": "30",
    "district_name": "Mandalajati",
    "city_code": "32.73"
  },
  {
    "district_code": "21",
    "district_name": "Bandung Kidul",
    "city_code": "32.73"
  },
  {
    "district_code": "22",
    "district_name": "Buahbatu",
    "city_code": "32.73"
  },
  {
    "district_code": "23",
    "district_name": "Rancasari",
    "city_code": "32.73"
  },
  {
    "district_code": "01",
    "district_name": "Cibinong",
    "city_code": "32.01"
  },
  {
    "district_code": "02",
    "district_name": "Gunung Putri",
    "city_code": "32.01"
  },
  {
    "district_code": "03",
    "district_name": "Citeureup",
    "city_code": "32.01"
  },
  {
    "district_code": "04",
    "district_name": "Sukaraja",
    "city_code": "32.01"
  },
  {
    "district_code": "05",
    "district_name": "Babakan Madang",
    "city_code": "32.01"
  },
  {
    "district_code": "06",
    "district_name": "Jonggol",
    "city_code": "32.01"
  },
  {
    "district_code": "07",
    "district_name": "Cileungsi",
    "city_code": "32.01"
  },
  {
    "district_code": "08",
    "district_name": "Cariu",
    "city_code": "32.01"
  },
  {
    "district_code": "09",
    "district_name": "Sukamakmur",
    "city_code": "32.01"
  },
  {
    "district_code": "11",
    "district_name": "Gunung Sindur",
    "city_code": "32.01"
  },
  {
    "district_code": "12",
    "district_name": "Kemang",
    "city_code": "32.01"
  },
  {
    "district_code": "13",
    "district_name": "Bojong Gede",
    "city_code": "32.01"
  },
  {
    "district_code": "14",
    "district_name": "Leuwiliang",
    "city_code": "32.01"
  },
  {
    "district_code": "15",
    "district_name": "Ciampea",
    "city_code": "32.01"
  },
  {
    "district_code": "16",
    "district_name": "Cibungbulang",
    "city_code": "32.01"
  },
  {
    "district_code": "17",
    "district_name": "Pamijahan",
    "city_code": "32.01"
  },
  {
    "district_code": "18",
    "district_name": "Rumpin",
    "city_code": "32.01"
  },
  {
    "district_code": "19",
    "district_name": "Jasinga",
    "city_code": "32.01"
  },
  {
    "district_code": "20",
    "district_name": "Parung Panjang",
    "city_code": "32.01"
  },
  {
    "district_code": "22",
    "district_name": "Cigudeg",
    "city_code": "32.01"
  },
  {
    "district_code": "23",
    "district_name": "Tenjo",
    "city_code": "32.01"
  },
  {
    "district_code": "24",
    "district_name": "Ciawi",
    "city_code": "32.01"
  },
  {
    "district_code": "25",
    "district_name": "Cisarua",
    "city_code": "32.01"
  },
  {
    "district_code": "26",
    "district_name": "Megamendung",
    "city_code": "32.01"
  },
  {
    "district_code": "27",
    "district_name": "Caringin",
    "city_code": "32.01"
  },
  {
    "district_code": "28",
    "district_name": "Cijeruk",
    "city_code": "32.01"
  },
  {
    "district_code": "29",
    "district_name": "Ciomas",
    "city_code": "32.01"
  },
  {
    "district_code": "30",
    "district_name": "Dramaga",
    "city_code": "32.01"
  },
  {
    "district_code": "31",
    "district_name": "Tamansari",
    "city_code": "32.01"
  },
  {
    "district_code": "32",
    "district_name": "Klapanunggal",
    "city_code": "32.01"
  },
  {
    "district_code": "33",
    "district_name": "Ciseeng",
    "city_code": "32.01"
  },
  {
    "district_code": "34",
    "district_name": "Ranca Bungur",
    "city_code": "32.01"
  },
  {
    "district_code": "35",
    "district_name": "Sukajaya",
    "city_code": "32.01"
  },
  {
    "district_code": "36",
    "district_name": "Tanjungsari",
    "city_code": "32.01"
  },
  {
    "district_code": "37",
    "district_name": "Tajurhalang",
    "city_code": "32.01"
  },
  {
    "district_code": "38",
    "district_name": "Cigombong",
    "city_code": "32.01"
  },
  {
    "district_code": "39",
    "district_name": "Leuwisadeng",
    "city_code": "32.01"
  },
  {
    "district_code": "40",
    "district_name": "Tenjolaya",
    "city_code": "32.01"
  },
  {
    "district_code": "10",
    "district_name": "Parung",
    "city_code": "32.01"
  }
];
async function seedDistricts() {
  try {
    console.log(`Starting to seed ${districts.length} districts for snowflake schema...`);
    for (const district of districts) {
        const cityRes = await db.query('SELECT city_id FROM forecasting.dim_city WHERE city_code = $1', [district.city_code.split('.').pop()]);
        if (cityRes.rows.length > 0) {
            const city_id = cityRes.rows[0].city_id;
            await db.query(`INSERT INTO forecasting.dim_district (district_code, district_name, city_id) VALUES ($1, $2, $3) ON CONFLICT (district_code) DO NOTHING`, [district.district_code, district.district_name, city_id]);
        } else {
            console.error(`City with code ${district.city_code} not found for district ${district.district_name}`);
        }
    }
    console.log('Districts seeded successfully!');
  } catch (error) {
    console.error('Error seeding districts:', error);
    throw error;
  }
}
module.exports = seedDistricts;