const db = require('/Users/muhammadrayandika/projects/bmkg_weather_forecasting/config/database');
const subdistricts = [
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cikadut",
    "district_code": "06",
    "latitude": -6.8816171768,
    "longitude": 107.6796051322,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Ciburial",
    "district_code": "06",
    "latitude": -6.8495763474,
    "longitude": 107.6495934527,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sindanglaya",
    "district_code": "06",
    "latitude": -6.8843577223,
    "longitude": 107.68950596,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Mekarsaluyu",
    "district_code": "06",
    "latitude": -6.8614263161,
    "longitude": 107.6502754851,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Mekarmanik",
    "district_code": "06",
    "latitude": -6.8534678773,
    "longitude": 107.694653114,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Padasuka",
    "district_code": "06",
    "latitude": -6.8871723673,
    "longitude": 107.6555782739,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cibeunying",
    "district_code": "06",
    "latitude": -6.8805553951,
    "longitude": 107.6419234642,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cimenyan",
    "district_code": "06",
    "latitude": -6.8586906437,
    "longitude": 107.6693159603,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Mandalamekar",
    "district_code": "06",
    "latitude": -6.8738119703,
    "longitude": 107.6735213953,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Jatiendah",
    "district_code": "07",
    "latitude": -6.9011541901,
    "longitude": 107.6982868745,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cilengkrang",
    "district_code": "07",
    "latitude": -6.8907098612,
    "longitude": 107.7338440077,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cipanjalu",
    "district_code": "07",
    "latitude": -6.849806843,
    "longitude": 107.7283602316,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Melatiwangi",
    "district_code": "07",
    "latitude": -6.8819901253,
    "longitude": 107.7063681608,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciporeat",
    "district_code": "07",
    "latitude": -6.8783891281,
    "longitude": 107.7275734231,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Girimekar",
    "district_code": "07",
    "latitude": -6.8712552427,
    "longitude": 107.7045303608,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Lengkong",
    "district_code": "08",
    "latitude": -6.980271098,
    "longitude": 107.6515522454,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bojongsoang",
    "district_code": "08",
    "latitude": -6.9880902593,
    "longitude": 107.6429345359,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Buahbatu",
    "district_code": "08",
    "latitude": -6.9808627147,
    "longitude": 107.6704127783,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cipagalo",
    "district_code": "08",
    "latitude": -6.970395913,
    "longitude": 107.6527989583,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Bojongsari",
    "district_code": "08",
    "latitude": -6.999910031,
    "longitude": 107.65162115,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Tegalluar",
    "district_code": "08",
    "latitude": -6.9796525886,
    "longitude": 107.6899303282,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Margahayu Tengah",
    "district_code": "09",
    "latitude": -6.9603456749,
    "longitude": 107.5717621693,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Margahayu Selatan",
    "district_code": "09",
    "latitude": -6.9708202535,
    "longitude": 107.5664076189,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sukamenak",
    "district_code": "09",
    "latitude": -6.9713834087,
    "longitude": 107.5842151281,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Sulaiman",
    "district_code": "09",
    "latitude": -6.9852130575,
    "longitude": 107.5735890991,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sayati",
    "district_code": "09",
    "latitude": -6.9713688673,
    "longitude": 107.5758781715,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Margaasih",
    "district_code": "10",
    "latitude": -6.9391350658,
    "longitude": 107.5462384938,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Lagadar",
    "district_code": "10",
    "latitude": -6.9276947067,
    "longitude": 107.5328164819,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Nanjung",
    "district_code": "10",
    "latitude": -6.9539530262,
    "longitude": 107.538343289,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Mekarrahayu",
    "district_code": "10",
    "latitude": -6.9711981032,
    "longitude": 107.5520709005,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Rahayu",
    "district_code": "10",
    "latitude": -6.9581201035,
    "longitude": 107.5564743813,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cigondewah Hilir",
    "district_code": "10",
    "latitude": -6.9520338228,
    "longitude": 107.5511735887,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sangkanhurip",
    "district_code": "11",
    "latitude": -6.9985648711,
    "longitude": 107.5669269707,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Katapang",
    "district_code": "11",
    "latitude": -7.0050486359,
    "longitude": 107.5463802022,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Gandasari",
    "district_code": "11",
    "latitude": -7.024761747,
    "longitude": 107.5507630073,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sukamukti",
    "district_code": "11",
    "latitude": -7.0025601784,
    "longitude": 107.580287616,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cilampeni",
    "district_code": "11",
    "latitude": -6.9893163524,
    "longitude": 107.5519841712,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Pangauban",
    "district_code": "11",
    "latitude": -7.0025107216,
    "longitude": 107.5555919582,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Banyusari",
    "district_code": "11",
    "latitude": -7.0177504517,
    "longitude": 107.5588737578,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Pasawahan",
    "district_code": "12",
    "latitude": -6.9687359201,
    "longitude": 107.6145710111,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Dayeuhkolot",
    "district_code": "12",
    "latitude": -6.9847741817,
    "longitude": 107.6219535108,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cangkuang Wetan",
    "district_code": "12",
    "latitude": -6.971019066,
    "longitude": 107.6046196578,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cangkuang Kulon",
    "district_code": "12",
    "latitude": -6.9704870167,
    "longitude": 107.5940808025,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sukapura",
    "district_code": "12",
    "latitude": -6.968772079,
    "longitude": 107.6283301266,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Citeureup",
    "district_code": "12",
    "latitude": -6.9796942842,
    "longitude": 107.6259793872,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Kamasan",
    "district_code": "13",
    "latitude": -7.0478227118,
    "longitude": 107.5782704689,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Banjaran Wetan",
    "district_code": "13",
    "latitude": -7.082090032,
    "longitude": 107.6111503799,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Banjaran",
    "district_code": "13",
    "latitude": -7.047203102,
    "longitude": 107.5886720397,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciapus",
    "district_code": "13",
    "latitude": -7.067177981,
    "longitude": 107.591845531,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sindangpanon",
    "district_code": "13",
    "latitude": -7.063182804,
    "longitude": 107.5816153541,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Kiangroke",
    "district_code": "13",
    "latitude": -7.0504843273,
    "longitude": 107.5674744697,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Tarajusari",
    "district_code": "13",
    "latitude": -7.0369211069,
    "longitude": 107.5843979861,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Mekarjaya",
    "district_code": "13",
    "latitude": -7.0903871756,
    "longitude": 107.6014940322,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Margahurip",
    "district_code": "13",
    "latitude": -7.0611714119,
    "longitude": 107.5619225724,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2016",
    "subdistrict_name": "Neglasari",
    "district_code": "13",
    "latitude": -7.0635338972,
    "longitude": 107.5723172802,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2018",
    "subdistrict_name": "Pasirmulya",
    "district_code": "13",
    "latitude": -7.1004354727,
    "longitude": 107.6007601846,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukasari",
    "district_code": "14",
    "latitude": -7.0229416287,
    "longitude": 107.5915559325,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bojongmanggu",
    "district_code": "14",
    "latitude": -7.0282286249,
    "longitude": 107.6026399796,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Rancatungku",
    "district_code": "14",
    "latitude": -7.0227507019,
    "longitude": 107.5787164306,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Bojongkunci",
    "district_code": "14",
    "latitude": -7.0189996046,
    "longitude": 107.5680517551,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Rancamulya",
    "district_code": "14",
    "latitude": -7.0092175537,
    "longitude": 107.5924072123,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Langonsari",
    "district_code": "14",
    "latitude": -7.0204824133,
    "longitude": 107.6076412192,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Baros",
    "district_code": "16",
    "latitude": -7.0657722642,
    "longitude": 107.6301740057,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Mangunjaya",
    "district_code": "16",
    "latitude": -7.0817216671,
    "longitude": 107.6195184105,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Mekarjaya",
    "district_code": "16",
    "latitude": -7.0830359014,
    "longitude": 107.6309496223,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Pinggirsari",
    "district_code": "16",
    "latitude": -7.0816253166,
    "longitude": 107.6518223705,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Patrolsari",
    "district_code": "16",
    "latitude": -7.0559806223,
    "longitude": 107.6698058293,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Rancakole",
    "district_code": "16",
    "latitude": -7.0712714903,
    "longitude": 107.6778067845,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Wargaluyu",
    "district_code": "16",
    "latitude": -7.035539342,
    "longitude": 107.6235618973,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Arjasari",
    "district_code": "16",
    "latitude": -7.0609034276,
    "longitude": 107.6420512389,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Lebakwangi",
    "district_code": "16",
    "latitude": -7.0423439242,
    "longitude": 107.6085987884,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Batukarut",
    "district_code": "16",
    "latitude": -7.0463015405,
    "longitude": 107.6006400052,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Ancolmekar",
    "district_code": "16",
    "latitude": -7.0907214954,
    "longitude": 107.6679685573,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cimaung",
    "district_code": "17",
    "latitude": -7.0918606122,
    "longitude": 107.5635903789,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Jagabaya",
    "district_code": "17",
    "latitude": -7.0773351646,
    "longitude": 107.5634952151,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Pasirhuni",
    "district_code": "17",
    "latitude": -7.0910918372,
    "longitude": 107.5767187511,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Campakamulya",
    "district_code": "17",
    "latitude": -7.1173652017,
    "longitude": 107.6062999995,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cipinang",
    "district_code": "17",
    "latitude": -7.1019364827,
    "longitude": 107.5603889273,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Mekarsari",
    "district_code": "17",
    "latitude": -7.125059869,
    "longitude": 107.5928963197,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukamaju",
    "district_code": "17",
    "latitude": -7.1076728214,
    "longitude": 107.5329219793,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cikalong",
    "district_code": "17",
    "latitude": -7.1194633742,
    "longitude": 107.5577630801,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Malasari",
    "district_code": "17",
    "latitude": -7.0875286611,
    "longitude": 107.5389571298,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Warjabakti",
    "district_code": "17",
    "latitude": -7.1384638031,
    "longitude": 107.5896117937,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cicalengka Kulon",
    "district_code": "25",
    "latitude": -6.9867671307,
    "longitude": 107.8395661177,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cicalengka Wetan",
    "district_code": "25",
    "latitude": -6.9913601636,
    "longitude": 107.8470240143,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Babakan Peuteuy",
    "district_code": "25",
    "latitude": -6.9864155089,
    "longitude": 107.8592681694,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cikuya",
    "district_code": "25",
    "latitude": -6.9828538265,
    "longitude": 107.823382539,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Dampit",
    "district_code": "25",
    "latitude": -6.9750405809,
    "longitude": 107.8627895019,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Margaasih",
    "district_code": "25",
    "latitude": -7.0102948284,
    "longitude": 107.8462842423,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Narawita",
    "district_code": "25",
    "latitude": -7.0227257842,
    "longitude": 107.8525187266,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Panenjoan",
    "district_code": "25",
    "latitude": -6.9737486435,
    "longitude": 107.8233570005,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tanjungwangi",
    "district_code": "25",
    "latitude": -6.9673341555,
    "longitude": 107.8932933612,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Tenjolaya",
    "district_code": "25",
    "latitude": -6.9775472127,
    "longitude": 107.8404763161,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Waluya",
    "district_code": "25",
    "latitude": -6.9951003262,
    "longitude": 107.8390003617,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Nagrog",
    "district_code": "25",
    "latitude": -6.9990628669,
    "longitude": 107.8683492273,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Nagreg",
    "district_code": "26",
    "latitude": -7.0252512164,
    "longitude": 107.8867150856,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bojong",
    "district_code": "26",
    "latitude": -7.0397057131,
    "longitude": 107.8752194696,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Ciaro",
    "district_code": "26",
    "latitude": -7.0434463948,
    "longitude": 107.9224816395,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Ciherang",
    "district_code": "26",
    "latitude": -7.0384547083,
    "longitude": 107.900779536,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Citaman",
    "district_code": "26",
    "latitude": -7.0046910367,
    "longitude": 107.8843067949,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Mandalawangi",
    "district_code": "26",
    "latitude": -7.0336732513,
    "longitude": 107.860696739,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Nagreg Kendan",
    "district_code": "26",
    "latitude": -7.0034909893,
    "longitude": 107.8978703727,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Ganjar Sabar",
    "district_code": "26",
    "latitude": -7.0172319203,
    "longitude": 107.8748894376,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Mandalasari",
    "district_code": "27",
    "latitude": -7.0342529157,
    "longitude": 107.8403646169,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cikancung",
    "district_code": "27",
    "latitude": -7.028103594,
    "longitude": 107.8310152448,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cikasungka",
    "district_code": "27",
    "latitude": -7.0047575025,
    "longitude": 107.8188407542,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cihanyir",
    "district_code": "27",
    "latitude": -7.026631625,
    "longitude": 107.8191939099,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciluluk",
    "district_code": "27",
    "latitude": -7.0342066536,
    "longitude": 107.813204438,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Hegarmanah",
    "district_code": "27",
    "latitude": -7.0021431838,
    "longitude": 107.8318198072,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Mekarlaksana",
    "district_code": "27",
    "latitude": -7.0539351144,
    "longitude": 107.8333947791,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Tanjunglaya",
    "district_code": "27",
    "latitude": -6.9985319451,
    "longitude": 107.8104722308,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Srirahayu",
    "district_code": "27",
    "latitude": -7.0456730085,
    "longitude": 107.8128992694,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Tegal Sumedang",
    "district_code": "28",
    "latitude": -6.977120749,
    "longitude": 107.7226241935,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Sangiang",
    "district_code": "28",
    "latitude": -7.0014498485,
    "longitude": 107.7928003709,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Nanjung Mekar",
    "district_code": "28",
    "latitude": -6.9705048155,
    "longitude": 107.8137029381,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1014",
    "subdistrict_name": "Rancaekek Kencana",
    "district_code": "28",
    "latitude": -6.9735061737,
    "longitude": 107.7572853595,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Ciparay",
    "district_code": "29",
    "latitude": -7.0253714031,
    "longitude": 107.720068939,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Gunungleutik",
    "district_code": "29",
    "latitude": -7.0368393817,
    "longitude": 107.7040045585,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Mekarsari",
    "district_code": "29",
    "latitude": -7.0319279136,
    "longitude": 107.7357176748,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cikoneng",
    "district_code": "29",
    "latitude": -7.0768121386,
    "longitude": 107.7082352268,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciheulang",
    "district_code": "29",
    "latitude": -7.0259767578,
    "longitude": 107.6841825109,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Pakutandang",
    "district_code": "29",
    "latitude": -7.0481399807,
    "longitude": 107.7092179856,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sumbersari",
    "district_code": "29",
    "latitude": -7.0024573029,
    "longitude": 107.7037363773,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Manggungharja",
    "district_code": "29",
    "latitude": -7.0425825319,
    "longitude": 107.7196269551,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sagaracipta",
    "district_code": "29",
    "latitude": -7.066859444,
    "longitude": 107.71384954,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sarimahi",
    "district_code": "29",
    "latitude": -7.0207337955,
    "longitude": 107.7066959621,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Serangmekar",
    "district_code": "29",
    "latitude": -7.0205276027,
    "longitude": 107.6981680552,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Babakan",
    "district_code": "29",
    "latitude": -7.1012382257,
    "longitude": 107.6680003012,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Bumiwangi",
    "district_code": "29",
    "latitude": -7.0393428989,
    "longitude": 107.6942699017,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Mekarlaksana",
    "district_code": "29",
    "latitude": -7.0646790495,
    "longitude": 107.6954743429,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cipeujeuh",
    "district_code": "30",
    "latitude": -7.0923978922,
    "longitude": 107.7109582553,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cikitu",
    "district_code": "30",
    "latitude": -7.1383185265,
    "longitude": 107.6924385232,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cinanggela",
    "district_code": "30",
    "latitude": -7.1329596134,
    "longitude": 107.661151925,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Maruyung",
    "district_code": "30",
    "latitude": -7.1080911082,
    "longitude": 107.703461393,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sukarame",
    "district_code": "30",
    "latitude": -7.1568589454,
    "longitude": 107.7199406616,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Nagrak",
    "district_code": "30",
    "latitude": -7.115561684,
    "longitude": 107.7279054475,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cikawao",
    "district_code": "30",
    "latitude": -7.1257800703,
    "longitude": 107.7385818115,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Mekarjaya",
    "district_code": "30",
    "latitude": -7.1166212379,
    "longitude": 107.6717209163,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Pangauban",
    "district_code": "30",
    "latitude": -7.140431739,
    "longitude": 107.6704061205,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Mandalahaji",
    "district_code": "30",
    "latitude": -7.1131684048,
    "longitude": 107.7149755411,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Girimulya",
    "district_code": "30",
    "latitude": -7.1622432496,
    "longitude": 107.6676164063,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Tanjungwangi",
    "district_code": "30",
    "latitude": -7.0854130471,
    "longitude": 107.7211627475,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Mekarsari",
    "district_code": "30",
    "latitude": -7.0978965929,
    "longitude": 107.6900645644,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukapura",
    "district_code": "31",
    "latitude": -7.1678431231,
    "longitude": 107.69092167,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cibeureum",
    "district_code": "31",
    "latitude": -7.1875590191,
    "longitude": 107.6680957697,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Santosa",
    "district_code": "31",
    "latitude": -7.2707281238,
    "longitude": 107.63833807,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Tarumajaya",
    "district_code": "31",
    "latitude": -7.2306118819,
    "longitude": 107.6649648121,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Neglawangi",
    "district_code": "31",
    "latitude": -7.2736802818,
    "longitude": 107.6949895794,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cihawuk",
    "district_code": "31",
    "latitude": -7.1949291941,
    "longitude": 107.7079467639,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cikembang",
    "district_code": "31",
    "latitude": -7.2131924252,
    "longitude": 107.6890821848,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Resmi Tingal",
    "district_code": "31",
    "latitude": -7.152374615,
    "longitude": 107.69525208,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Baleendah",
    "district_code": "32",
    "latitude": -7.010215327,
    "longitude": 107.6269627521,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Andir",
    "district_code": "32",
    "latitude": -6.996846381,
    "longitude": 107.615827447,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Manggahang",
    "district_code": "32",
    "latitude": -7.0195673232,
    "longitude": 107.6456204422,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Jelekong",
    "district_code": "32",
    "latitude": -7.0254728736,
    "longitude": 107.66078972,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Bojongmalaka",
    "district_code": "32",
    "latitude": -6.9929807723,
    "longitude": 107.6082079735,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Rancamanyar",
    "district_code": "32",
    "latitude": -6.9904188754,
    "longitude": 107.5948704157,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Malakasari",
    "district_code": "32",
    "latitude": -7.0098481223,
    "longitude": 107.6048598488,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1008",
    "subdistrict_name": "Wargamekar",
    "district_code": "32",
    "latitude": -7.0220819486,
    "longitude": 107.6749722071,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Solokanjeruk",
    "district_code": "34",
    "latitude": -7.0084711697,
    "longitude": 107.7443460965,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cibodas",
    "district_code": "34",
    "latitude": -7.0114394589,
    "longitude": 107.7627163905,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Panyadap",
    "district_code": "34",
    "latitude": -7.0259401636,
    "longitude": 107.7727123775,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Bojongemas",
    "district_code": "34",
    "latitude": -6.9981637952,
    "longitude": 107.7222491947,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Padamukti",
    "district_code": "34",
    "latitude": -7.0118385389,
    "longitude": 107.771947475,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Langensari",
    "district_code": "34",
    "latitude": -7.008172758,
    "longitude": 107.7549104388,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cigentur",
    "district_code": "35",
    "latitude": -7.0191069713,
    "longitude": 107.7947075109,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cipedes",
    "district_code": "35",
    "latitude": -7.0316952224,
    "longitude": 107.7937703253,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Loa",
    "district_code": "35",
    "latitude": -7.1008587346,
    "longitude": 107.7973474701,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cijagra",
    "district_code": "35",
    "latitude": -7.0402950168,
    "longitude": 107.7881256454,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cipaku",
    "district_code": "35",
    "latitude": -7.0593552011,
    "longitude": 107.7829434207,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sindangsari",
    "district_code": "35",
    "latitude": -7.0735590944,
    "longitude": 107.7767570195,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Drawati",
    "district_code": "35",
    "latitude": -7.078928983,
    "longitude": 107.8110030544,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukamanah",
    "district_code": "35",
    "latitude": -7.0446073246,
    "longitude": 107.77019016,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sukamantri",
    "district_code": "35",
    "latitude": -7.0558459776,
    "longitude": 107.7693906263,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Karangtunggal",
    "district_code": "35",
    "latitude": -7.0599516556,
    "longitude": 107.8122913122,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Mekarpawitan",
    "district_code": "35",
    "latitude": -7.0467365987,
    "longitude": 107.7839189994,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Tangsimekar",
    "district_code": "35",
    "latitude": -7.0278627969,
    "longitude": 107.7877542728,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Ibun",
    "district_code": "36",
    "latitude": -7.129959159,
    "longitude": 107.7716556896,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Laksana",
    "district_code": "36",
    "latitude": -7.1330267121,
    "longitude": 107.7846906414,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Dukuh",
    "district_code": "36",
    "latitude": -7.1305979151,
    "longitude": 107.7589020512,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Talun",
    "district_code": "36",
    "latitude": -7.065725099,
    "longitude": 107.7656765471,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Pangguh",
    "district_code": "36",
    "latitude": -7.0973431554,
    "longitude": 107.7486031441,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Lampegan",
    "district_code": "36",
    "latitude": -7.0702214353,
    "longitude": 107.7587043388,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Neglasari",
    "district_code": "36",
    "latitude": -7.1311523074,
    "longitude": 107.7478583742,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Mekarwangi",
    "district_code": "36",
    "latitude": -7.1124123498,
    "longitude": 107.7876528216,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sudi",
    "district_code": "36",
    "latitude": -7.0801841341,
    "longitude": 107.7687817686,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Tanggulun",
    "district_code": "36",
    "latitude": -7.055412757,
    "longitude": 107.7621028354,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Cibeet",
    "district_code": "36",
    "latitude": -7.0858944588,
    "longitude": 107.7609930719,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Karyalaksana",
    "district_code": "36",
    "latitude": -7.0779819946,
    "longitude": 107.7526759751,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Soreang",
    "district_code": "37",
    "latitude": -7.0338324408,
    "longitude": 107.5294513762,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sadu",
    "district_code": "37",
    "latitude": -7.0342924909,
    "longitude": 107.5052215799,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Panyirapan",
    "district_code": "37",
    "latitude": -7.0411749541,
    "longitude": 107.52427432,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sukajadi",
    "district_code": "37",
    "latitude": -7.0647387294,
    "longitude": 107.503475289,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Pamekaran",
    "district_code": "37",
    "latitude": -7.0236400887,
    "longitude": 107.5259012098,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2017",
    "subdistrict_name": "Karamatmulya",
    "district_code": "37",
    "latitude": -7.0395440238,
    "longitude": 107.5108569553,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2018",
    "subdistrict_name": "Sukanagara",
    "district_code": "37",
    "latitude": -7.0580415659,
    "longitude": 107.5147838002,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2019",
    "subdistrict_name": "Cingcin",
    "district_code": "37",
    "latitude": -7.0261407613,
    "longitude": 107.5403122396,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2020",
    "subdistrict_name": "Parungserab",
    "district_code": "37",
    "latitude": -7.0117093376,
    "longitude": 107.5317918948,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2021",
    "subdistrict_name": "Sekarwangi",
    "district_code": "37",
    "latitude": -7.0149304582,
    "longitude": 107.5400958082,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Pasirjambu",
    "district_code": "38",
    "latitude": -7.0906214593,
    "longitude": 107.4774004598,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cibodas",
    "district_code": "38",
    "latitude": -7.1009819953,
    "longitude": 107.5032083671,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cikoneng",
    "district_code": "38",
    "latitude": -7.0650864825,
    "longitude": 107.4844695486,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cukanggenteng",
    "district_code": "38",
    "latitude": -7.0810977948,
    "longitude": 107.4963453909,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cisondari",
    "district_code": "38",
    "latitude": -7.1245210524,
    "longitude": 107.4872333246,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Margamulya",
    "district_code": "38",
    "latitude": -7.1213471798,
    "longitude": 107.4573362356,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Mekarsari",
    "district_code": "38",
    "latitude": -7.1493059047,
    "longitude": 107.5005105801,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Mekarmaju",
    "district_code": "38",
    "latitude": -7.0868642805,
    "longitude": 107.4670064808,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sugihmukti",
    "district_code": "38",
    "latitude": -7.1995970437,
    "longitude": 107.4255641245,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Tenjolaya",
    "district_code": "38",
    "latitude": -7.1936763612,
    "longitude": 107.4752358685,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Lebakmuncang",
    "district_code": "39",
    "latitude": -7.102632211,
    "longitude": 107.4154058743,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Ciwidey",
    "district_code": "39",
    "latitude": -7.1024331836,
    "longitude": 107.4543651977,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Nengkelan",
    "district_code": "39",
    "latitude": -7.0677126521,
    "longitude": 107.4527186825,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Panundaan",
    "district_code": "39",
    "latitude": -7.10988394,
    "longitude": 107.4389098487,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Panyocokan",
    "district_code": "39",
    "latitude": -7.0930497892,
    "longitude": 107.4565137759,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Rawabogo",
    "district_code": "39",
    "latitude": -7.0659722568,
    "longitude": 107.4348881481,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukawening",
    "district_code": "39",
    "latitude": -7.0658613633,
    "longitude": 107.466538736,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Patengan",
    "district_code": "40",
    "latitude": -7.1442716129,
    "longitude": 107.374103478,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sukaresmi",
    "district_code": "40",
    "latitude": -7.1953463388,
    "longitude": 107.3551783527,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Indragiri",
    "district_code": "40",
    "latitude": -7.1252181168,
    "longitude": 107.3390717303,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cipelah",
    "district_code": "40",
    "latitude": -7.184169842,
    "longitude": 107.2912198066,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Alamendah",
    "district_code": "40",
    "latitude": -7.1396528844,
    "longitude": 107.4148126601,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cangkuang",
    "district_code": "44",
    "latitude": -7.0396021783,
    "longitude": 107.5568171731,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Ciluncat",
    "district_code": "44",
    "latitude": -7.0448246173,
    "longitude": 107.5475266778,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Nagrak",
    "district_code": "44",
    "latitude": -7.0592241206,
    "longitude": 107.5461953673,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Bandasari",
    "district_code": "44",
    "latitude": -7.0680711278,
    "longitude": 107.528055707,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Pananjung",
    "district_code": "44",
    "latitude": -7.054739272,
    "longitude": 107.5278216626,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Jatisari",
    "district_code": "44",
    "latitude": -7.0756798279,
    "longitude": 107.5375043854,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Tanjungsari",
    "district_code": "44",
    "latitude": -7.0377794222,
    "longitude": 107.5690729495,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Jelegong",
    "district_code": "46",
    "latitude": -6.9556678914,
    "longitude": 107.5272327565,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Jatisari",
    "district_code": "46",
    "latitude": -6.9762237684,
    "longitude": 107.5202948085,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Pameuntasan",
    "district_code": "46",
    "latitude": -6.9814742753,
    "longitude": 107.5447141836,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Kopo",
    "district_code": "46",
    "latitude": -6.9976462696,
    "longitude": 107.5339308538,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cibodas",
    "district_code": "46",
    "latitude": -6.9868239313,
    "longitude": 107.5071979212,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kutawaringin",
    "district_code": "46",
    "latitude": -6.999217399,
    "longitude": 107.5066040656,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukamulya",
    "district_code": "46",
    "latitude": -7.0092135987,
    "longitude": 107.4890689752,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Padasuka",
    "district_code": "46",
    "latitude": -7.0136725974,
    "longitude": 107.5180276762,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Buninagara",
    "district_code": "46",
    "latitude": -7.0223364434,
    "longitude": 107.4978958968,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Gajah Mekar",
    "district_code": "46",
    "latitude": -6.9755735103,
    "longitude": 107.5343981426,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Cilame",
    "district_code": "46",
    "latitude": -7.0409241614,
    "longitude": 107.4867013237,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cileunyi Kulon",
    "district_code": "05",
    "latitude": -6.944224959,
    "longitude": 107.7399605312,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cileunyi Wetan",
    "district_code": "05",
    "latitude": -6.9326660984,
    "longitude": 107.749474367,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cimekar",
    "district_code": "05",
    "latitude": -6.9361507163,
    "longitude": 107.7380740646,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cinunuk",
    "district_code": "05",
    "latitude": -6.9319519725,
    "longitude": 107.732885724,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cibiru Hilir",
    "district_code": "05",
    "latitude": -6.9552820593,
    "longitude": 107.7160557632,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cibiru Wetan",
    "district_code": "05",
    "latitude": -6.9083494708,
    "longitude": 107.7372561305,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Pulosari",
    "district_code": "15",
    "latitude": -7.1744430498,
    "longitude": 107.5444601342,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Wanasuka",
    "district_code": "15",
    "latitude": -7.265082421,
    "longitude": 107.6089559417,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Margamekar",
    "district_code": "15",
    "latitude": -7.2019007955,
    "longitude": 107.5715720757,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Pangalengan",
    "district_code": "15",
    "latitude": -7.1762010559,
    "longitude": 107.5860927299,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Margaluyu",
    "district_code": "15",
    "latitude": -7.2285037051,
    "longitude": 107.5556147457,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Warnasari",
    "district_code": "15",
    "latitude": -7.1907847687,
    "longitude": 107.516107484,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Sukamanah",
    "district_code": "15",
    "latitude": -7.2039228818,
    "longitude": 107.6043709658,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Lamajang",
    "district_code": "15",
    "latitude": -7.1333865906,
    "longitude": 107.539579461,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Margamukti",
    "district_code": "15",
    "latitude": -7.181964148,
    "longitude": 107.6205071437,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Margamulya",
    "district_code": "15",
    "latitude": -7.1595606943,
    "longitude": 107.5903203753,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Banjarsari",
    "district_code": "15",
    "latitude": -7.2305908707,
    "longitude": 107.5927510718,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sukaluyu",
    "district_code": "15",
    "latitude": -7.2331556431,
    "longitude": 107.5216970709,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Tribaktimulya",
    "district_code": "15",
    "latitude": -7.1439011055,
    "longitude": 107.5640098643,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Jelegong",
    "district_code": "28",
    "latitude": -6.9734814859,
    "longitude": 107.772105978,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Linggar",
    "district_code": "28",
    "latitude": -6.9729883858,
    "longitude": 107.7828680722,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cangkuang",
    "district_code": "28",
    "latitude": -6.9760618467,
    "longitude": 107.7977166347,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Haurpugur",
    "district_code": "28",
    "latitude": -6.9930673442,
    "longitude": 107.7882050615,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sukamanah",
    "district_code": "28",
    "latitude": -6.988413218,
    "longitude": 107.7316788326,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sukamulya",
    "district_code": "28",
    "latitude": -6.9847086376,
    "longitude": 107.7807790491,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Rancaekek Wetan",
    "district_code": "28",
    "latitude": -6.9678629898,
    "longitude": 107.754972951,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Rancaekek Kulon",
    "district_code": "28",
    "latitude": -6.9710199659,
    "longitude": 107.7429995197,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Bojongsalam",
    "district_code": "28",
    "latitude": -6.9887593329,
    "longitude": 107.8096800357,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Bojongloa",
    "district_code": "28",
    "latitude": -6.9768961689,
    "longitude": 107.7607816467,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Majalaya",
    "district_code": "33",
    "latitude": -7.0449660842,
    "longitude": 107.7594125238,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Wangisagara",
    "district_code": "33",
    "latitude": -7.0750615652,
    "longitude": 107.7417174164,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Biru",
    "district_code": "33",
    "latitude": -7.0528622106,
    "longitude": 107.7256670232,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Padamulya",
    "district_code": "33",
    "latitude": -7.0560228448,
    "longitude": 107.7483106102,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Bojong",
    "district_code": "33",
    "latitude": -7.0390942863,
    "longitude": 107.7753189469,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Majasetra",
    "district_code": "33",
    "latitude": -7.0339172252,
    "longitude": 107.7557586941,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Majakerta",
    "district_code": "33",
    "latitude": -7.0415543126,
    "longitude": 107.7641992199,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukamaju",
    "district_code": "33",
    "latitude": -7.0494295759,
    "longitude": 107.7533117866,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Padaulun",
    "district_code": "33",
    "latitude": -7.0542414408,
    "longitude": 107.7354288076,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Neglasari",
    "district_code": "33",
    "latitude": -7.0757764971,
    "longitude": 107.7307961296,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Sukamukti",
    "district_code": "33",
    "latitude": -7.059555634,
    "longitude": 107.7429184699,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Rancakasumba",
    "district_code": "34",
    "latitude": -7.0186670698,
    "longitude": 107.7351089632,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Pagerwangi",
    "district_code": "01",
    "latitude": -6.8379389782,
    "longitude": 107.6249143423,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Kayuambon",
    "district_code": "01",
    "latitude": -6.81846414,
    "longitude": 107.6343140754,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Lembang",
    "district_code": "01",
    "latitude": -6.8207425317,
    "longitude": 107.6195904333,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cikidang",
    "district_code": "01",
    "latitude": -6.7926474135,
    "longitude": 107.6625604284,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cikahuripan",
    "district_code": "01",
    "latitude": -6.7925745237,
    "longitude": 107.6091192546,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cikole",
    "district_code": "01",
    "latitude": -6.7890120428,
    "longitude": 107.6440967922,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Gudangkahuripan",
    "district_code": "01",
    "latitude": -6.8300770059,
    "longitude": 107.6050452608,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Jayagiri",
    "district_code": "01",
    "latitude": -6.7893861823,
    "longitude": 107.6223138883,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Cibodas",
    "district_code": "01",
    "latitude": -6.823891156,
    "longitude": 107.6760666947,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Langensari",
    "district_code": "01",
    "latitude": -6.8264117546,
    "longitude": 107.6447269521,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Mekarwangi",
    "district_code": "01",
    "latitude": -6.845510901,
    "longitude": 107.638163704,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Cibogo",
    "district_code": "01",
    "latitude": -6.8080093147,
    "longitude": 107.6382925928,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Sukajaya",
    "district_code": "01",
    "latitude": -6.7906197948,
    "longitude": 107.5997953731,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Suntenjaya",
    "district_code": "01",
    "latitude": -6.8162581164,
    "longitude": 107.7100289161,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2015",
    "subdistrict_name": "Wangunharja",
    "district_code": "01",
    "latitude": -6.8091458451,
    "longitude": 107.6717342736,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2016",
    "subdistrict_name": "Wangunsari",
    "district_code": "01",
    "latitude": -6.8425697981,
    "longitude": 107.6097963538,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Karyawangi",
    "district_code": "02",
    "latitude": -6.7669679208,
    "longitude": 107.5882108876,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cihanjuang",
    "district_code": "02",
    "latitude": -6.850002654,
    "longitude": 107.5687706119,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cihanjuangrahayu",
    "district_code": "02",
    "latitude": -6.8178908352,
    "longitude": 107.5747902227,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cihideung",
    "district_code": "02",
    "latitude": -6.8178215297,
    "longitude": 107.5924628813,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciwaruga",
    "district_code": "02",
    "latitude": -6.8599256508,
    "longitude": 107.5793128209,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cigugurgirang",
    "district_code": "02",
    "latitude": -6.8313231347,
    "longitude": 107.5855481246,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sariwangi",
    "district_code": "02",
    "latitude": -6.8614019503,
    "longitude": 107.5709597623,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Jambudipa",
    "district_code": "03",
    "latitude": -6.8207907303,
    "longitude": 107.5566121329,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Padaasih",
    "district_code": "03",
    "latitude": -6.8358728408,
    "longitude": 107.5616404509,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Pasirhalang",
    "district_code": "03",
    "latitude": -6.8225692708,
    "longitude": 107.5333237669,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Pasirlangu",
    "district_code": "03",
    "latitude": -6.7932547761,
    "longitude": 107.5386826697,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cipada",
    "district_code": "03",
    "latitude": -6.7839001472,
    "longitude": 107.5203129565,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kertawangi",
    "district_code": "03",
    "latitude": -6.772757923,
    "longitude": 107.5713623898,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Tugumukti",
    "district_code": "03",
    "latitude": -6.8019738735,
    "longitude": 107.5475172282,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sadangmekar",
    "district_code": "03",
    "latitude": -6.7891719414,
    "longitude": 107.4949487496,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Jatimekar",
    "district_code": "05",
    "latitude": -6.7501463502,
    "longitude": 107.3751782894,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Margalaksana",
    "district_code": "05",
    "latitude": -6.7297335518,
    "longitude": 107.3324566155,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Margaluyu",
    "district_code": "05",
    "latitude": -6.7667531245,
    "longitude": 107.3084500505,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Nanggeleng",
    "district_code": "05",
    "latitude": -6.7778234564,
    "longitude": 107.3511907691,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Nyenang",
    "district_code": "05",
    "latitude": -6.7476694998,
    "longitude": 107.345648485,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sirnaraja",
    "district_code": "05",
    "latitude": -6.7814139523,
    "longitude": 107.3863165003,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Sirnagalih",
    "district_code": "05",
    "latitude": -6.7125110281,
    "longitude": 107.3669300957,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Sukahaji",
    "district_code": "05",
    "latitude": -6.7314366161,
    "longitude": 107.3688915155,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cipeundeuy",
    "district_code": "05",
    "latitude": -6.7384822613,
    "longitude": 107.3574102636,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Ciharashas",
    "district_code": "05",
    "latitude": -6.7249860467,
    "longitude": 107.3822670742,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Bojongmekar",
    "district_code": "05",
    "latitude": -6.7546193109,
    "longitude": 107.3511752889,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Ciroyom",
    "district_code": "05",
    "latitude": -6.7074053454,
    "longitude": 107.349636911,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Ngamprah",
    "district_code": "06",
    "latitude": -6.8316388877,
    "longitude": 107.5067304917,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cimareme",
    "district_code": "06",
    "latitude": -6.8685169393,
    "longitude": 107.5032603599,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cilame",
    "district_code": "06",
    "latitude": -6.8442763129,
    "longitude": 107.5211866438,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Tanimulya",
    "district_code": "06",
    "latitude": -6.8594402461,
    "longitude": 107.5266033048,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cimanggu",
    "district_code": "06",
    "latitude": -6.8147617677,
    "longitude": 107.5106909134,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Bojongkoneng",
    "district_code": "06",
    "latitude": -6.8147164492,
    "longitude": 107.4949479858,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Margajaya",
    "district_code": "06",
    "latitude": -6.8536696957,
    "longitude": 107.502397283,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Mekarsari",
    "district_code": "06",
    "latitude": -6.8430657919,
    "longitude": 107.5082714605,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Gadobangkong",
    "district_code": "06",
    "latitude": -6.869534519,
    "longitude": 107.5164818844,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sukatani",
    "district_code": "06",
    "latitude": -6.8322124141,
    "longitude": 107.4947082671,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Pakuhaji",
    "district_code": "06",
    "latitude": -6.83734761,
    "longitude": 107.5372078036,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Ciptaharja",
    "district_code": "07",
    "latitude": -6.8539306482,
    "longitude": 107.3763387618,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cipatat",
    "district_code": "07",
    "latitude": -6.8373687383,
    "longitude": 107.3899459217,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Citatah",
    "district_code": "07",
    "latitude": -6.839482973,
    "longitude": 107.4152319203,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Rajamandalakulon",
    "district_code": "07",
    "latitude": -6.8532358679,
    "longitude": 107.3511299753,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Mandalawangi",
    "district_code": "07",
    "latitude": -6.8359000709,
    "longitude": 107.334793717,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kertamukti",
    "district_code": "07",
    "latitude": -6.8085805042,
    "longitude": 107.3781846287,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Nyalindung",
    "district_code": "07",
    "latitude": -6.7897279643,
    "longitude": 107.4423902878,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Gunungmasigit",
    "district_code": "07",
    "latitude": -6.835551683,
    "longitude": 107.4386726826,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Cirawamekar",
    "district_code": "07",
    "latitude": -6.8103139468,
    "longitude": 107.4280607804,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Mandalasari",
    "district_code": "07",
    "latitude": -6.8243514514,
    "longitude": 107.3338449469,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Sumurbandung",
    "district_code": "07",
    "latitude": -6.7898285946,
    "longitude": 107.4173837935,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Sarimukti",
    "district_code": "07",
    "latitude": -6.8073822071,
    "longitude": 107.3406023821,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Kertamulya",
    "district_code": "08",
    "latitude": -6.8435062752,
    "longitude": 107.4871717669,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Padalarang",
    "district_code": "08",
    "latitude": -6.8411391244,
    "longitude": 107.4649849332,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cimerang",
    "district_code": "08",
    "latitude": -6.8785978576,
    "longitude": 107.4817069986,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Campaka Mekar",
    "district_code": "08",
    "latitude": -6.8014958477,
    "longitude": 107.4601194788,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Tagogapu",
    "district_code": "08",
    "latitude": -6.8054966457,
    "longitude": 107.4809713676,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Ciburuy",
    "district_code": "08",
    "latitude": -6.8261871447,
    "longitude": 107.4668175984,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Kertajaya",
    "district_code": "08",
    "latitude": -6.8564371351,
    "longitude": 107.4820729412,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cipeundeuy",
    "district_code": "08",
    "latitude": -6.8694605331,
    "longitude": 107.4774552488,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Jayamekar",
    "district_code": "08",
    "latitude": -6.8514344752,
    "longitude": 107.4587809014,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Laksanamekar",
    "district_code": "08",
    "latitude": -6.8821993558,
    "longitude": 107.5034610538,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Batujajar Timur",
    "district_code": "09",
    "latitude": -6.9136524443,
    "longitude": 107.5102057759,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Batujajar Barat",
    "district_code": "09",
    "latitude": -6.9218275051,
    "longitude": 107.4929214972,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Galanggang",
    "district_code": "09",
    "latitude": -6.9103068684,
    "longitude": 107.483910977,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cangkorah",
    "district_code": "09",
    "latitude": -6.8943558162,
    "longitude": 107.4742384015,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Selacau",
    "district_code": "09",
    "latitude": -6.9288852027,
    "longitude": 107.5119879387,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Pangauban",
    "district_code": "09",
    "latitude": -6.9007269022,
    "longitude": 107.4531673425,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Giriasih",
    "district_code": "09",
    "latitude": -6.8972475121,
    "longitude": 107.5014814362,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cipatik",
    "district_code": "10",
    "latitude": -6.9401815701,
    "longitude": 107.5059147106,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Citapen",
    "district_code": "10",
    "latitude": -6.9375671729,
    "longitude": 107.4932392445,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cihampelas",
    "district_code": "10",
    "latitude": -6.9192744081,
    "longitude": 107.4682987784,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Mekarjaya",
    "district_code": "10",
    "latitude": -6.9132603845,
    "longitude": 107.4410334625,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Mekarmukti",
    "district_code": "10",
    "latitude": -6.9300563142,
    "longitude": 107.4641238889,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Pataruman",
    "district_code": "10",
    "latitude": -6.9444720927,
    "longitude": 107.519751742,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Situwangi",
    "district_code": "10",
    "latitude": -6.9634973986,
    "longitude": 107.5050761994,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Singajaya",
    "district_code": "10",
    "latitude": -6.9511863725,
    "longitude": 107.4768035731,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tanjungwangi",
    "district_code": "10",
    "latitude": -6.9555987532,
    "longitude": 107.4906231426,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Tanjungjaya",
    "district_code": "10",
    "latitude": -6.921940949,
    "longitude": 107.4232012293,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Girimukti",
    "district_code": "12",
    "latitude": -6.9841914342,
    "longitude": 107.3649004992,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Karangsari",
    "district_code": "12",
    "latitude": -6.965389371,
    "longitude": 107.3432674433,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Mekarsari",
    "district_code": "12",
    "latitude": -6.9433030517,
    "longitude": 107.3705205148,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Neglasari",
    "district_code": "12",
    "latitude": -6.9618286186,
    "longitude": 107.3606709167,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Sirnagalih",
    "district_code": "12",
    "latitude": -6.9123519618,
    "longitude": 107.3261337411,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Sukamulya",
    "district_code": "12",
    "latitude": -6.9562568951,
    "longitude": 107.3996313999,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sarinagen",
    "district_code": "12",
    "latitude": -6.9401321998,
    "longitude": 107.3551374802,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Baranangsiang",
    "district_code": "12",
    "latitude": -6.9058171256,
    "longitude": 107.3451346783,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Citalem",
    "district_code": "12",
    "latitude": -6.947724514,
    "longitude": 107.3852670727,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cijenuk",
    "district_code": "12",
    "latitude": -6.9705877083,
    "longitude": 107.3778605662,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cijambu",
    "district_code": "12",
    "latitude": -6.929625345,
    "longitude": 107.3396967109,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cibenda",
    "district_code": "12",
    "latitude": -6.9415242262,
    "longitude": 107.3186782506,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cintaasih",
    "district_code": "12",
    "latitude": -6.9592503825,
    "longitude": 107.3216930566,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cicangkanghilir",
    "district_code": "12",
    "latitude": -6.9622459581,
    "longitude": 107.4109184162,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cibedug",
    "district_code": "13",
    "latitude": -7.0057191288,
    "longitude": 107.2713125835,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bojong",
    "district_code": "13",
    "latitude": -6.9853368242,
    "longitude": 107.2661366963,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Bojongsalam",
    "district_code": "13",
    "latitude": -6.9722476597,
    "longitude": 107.2286403331,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cibitung",
    "district_code": "13",
    "latitude": -6.9281570683,
    "longitude": 107.3030151045,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cicadas",
    "district_code": "13",
    "latitude": -6.9980610653,
    "longitude": 107.213245324,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cinengah",
    "district_code": "13",
    "latitude": -6.9672915873,
    "longitude": 107.2769972904,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukamanah",
    "district_code": "13",
    "latitude": -6.9874689818,
    "longitude": 107.2948604397,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukaresmi",
    "district_code": "13",
    "latitude": -6.9447960528,
    "longitude": 107.2646379006,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cintakarya",
    "district_code": "14",
    "latitude": -6.9908870917,
    "longitude": 107.3990476096,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sindangkerta",
    "district_code": "14",
    "latitude": -6.9803458309,
    "longitude": 107.4130643489,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Buninagara",
    "district_code": "14",
    "latitude": -7.0299564969,
    "longitude": 107.44003921,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cikadu",
    "district_code": "14",
    "latitude": -6.9960708473,
    "longitude": 107.4161953144,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cicangkanggirang",
    "district_code": "14",
    "latitude": -7.0078610392,
    "longitude": 107.3737412711,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Mekarwangi",
    "district_code": "14",
    "latitude": -7.0716354326,
    "longitude": 107.3932783561,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Pasirpogor",
    "district_code": "14",
    "latitude": -6.9777252008,
    "longitude": 107.3926492209,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Puncaksari",
    "district_code": "14",
    "latitude": -6.9900179125,
    "longitude": 107.389999003,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Rancasenggang",
    "district_code": "14",
    "latitude": -7.0099293551,
    "longitude": 107.4104829883,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Weninggalih",
    "district_code": "14",
    "latitude": -7.0331253276,
    "longitude": 107.382588228,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Wangunsari",
    "district_code": "14",
    "latitude": -7.0363301549,
    "longitude": 107.4138078361,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sirnajaya",
    "district_code": "15",
    "latitude": -7.0448557607,
    "longitude": 107.2916833553,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Gununghalu",
    "district_code": "15",
    "latitude": -7.0639131664,
    "longitude": 107.3320882996,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Bunijaya",
    "district_code": "15",
    "latitude": -7.0292062761,
    "longitude": 107.2654214974,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Celak",
    "district_code": "15",
    "latitude": -7.0203331091,
    "longitude": 107.3547858393,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cilangari",
    "district_code": "15",
    "latitude": -7.0446954272,
    "longitude": 107.2213601846,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sindangjaya",
    "district_code": "15",
    "latitude": -7.0265548605,
    "longitude": 107.2166782378,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukasari",
    "district_code": "15",
    "latitude": -6.9857555151,
    "longitude": 107.3433956085,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Tamanjaya",
    "district_code": "15",
    "latitude": -6.9923522533,
    "longitude": 107.3197987178,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Wargasaluyu",
    "district_code": "15",
    "latitude": -7.0151198437,
    "longitude": 107.3343818588,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cikande",
    "district_code": "16",
    "latitude": -6.8758906056,
    "longitude": 107.4322989142,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Jati",
    "district_code": "16",
    "latitude": -6.8981728297,
    "longitude": 107.3985349331,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Girimukti",
    "district_code": "16",
    "latitude": -6.8945673868,
    "longitude": 107.4227166537,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Bojonghaleuang",
    "district_code": "16",
    "latitude": -6.8678534529,
    "longitude": 107.4504413456,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cipangeran",
    "district_code": "16",
    "latitude": -6.8768662274,
    "longitude": 107.3980806946,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Saguling",
    "district_code": "16",
    "latitude": -6.8979294321,
    "longitude": 107.3719297757,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Ciptagumati",
    "district_code": "04",
    "latitude": -6.7380976884,
    "longitude": 107.4420552439,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cikalong",
    "district_code": "04",
    "latitude": -6.7310465702,
    "longitude": 107.4222051246,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cipada",
    "district_code": "04",
    "latitude": -6.7661527052,
    "longitude": 107.5043132578,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cisomangbarat",
    "district_code": "04",
    "latitude": -6.7171115429,
    "longitude": 107.4521696516,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ganjarsari",
    "district_code": "04",
    "latitude": -6.74857556,
    "longitude": 107.4963689106,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kanangasari",
    "district_code": "04",
    "latitude": -6.7598866152,
    "longitude": 107.4054575508,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Mandalasari",
    "district_code": "04",
    "latitude": -6.7658636949,
    "longitude": 107.4404841702,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Mandalamukti",
    "district_code": "04",
    "latitude": -6.7495964912,
    "longitude": 107.4545686408,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Mekarjaya",
    "district_code": "04",
    "latitude": -6.7780920261,
    "longitude": 107.4712142615,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Puteran",
    "district_code": "04",
    "latitude": -6.7058343729,
    "longitude": 107.392639126,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Rende",
    "district_code": "04",
    "latitude": -6.7367701884,
    "longitude": 107.4044944308,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Tenjolaut",
    "district_code": "04",
    "latitude": -6.710792227,
    "longitude": 107.4273154169,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Wangunjaya",
    "district_code": "04",
    "latitude": -6.7294714066,
    "longitude": 107.4672509161,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cililin",
    "district_code": "11",
    "latitude": -6.9469896991,
    "longitude": 107.4546015507,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Budiharja",
    "district_code": "11",
    "latitude": -6.9379985675,
    "longitude": 107.4341659863,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Batulayang",
    "district_code": "11",
    "latitude": -6.9660647444,
    "longitude": 107.4474547948,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Bongas",
    "district_code": "11",
    "latitude": -6.9547568528,
    "longitude": 107.4253442976,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Karanganyar",
    "district_code": "11",
    "latitude": -6.9305221149,
    "longitude": 107.3960728222,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Karangtanjung",
    "district_code": "11",
    "latitude": -6.9564318613,
    "longitude": 107.4680943755,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Karyamukti",
    "district_code": "11",
    "latitude": -7.035771115,
    "longitude": 107.469640189,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Kidangpananjung",
    "district_code": "11",
    "latitude": -6.9798776426,
    "longitude": 107.4822698793,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Mukapayung",
    "district_code": "11",
    "latitude": -6.9938259,
    "longitude": 107.4551297734,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Nanggerang",
    "district_code": "11",
    "latitude": -7.0159108977,
    "longitude": 107.4552062771,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Rancapanggung",
    "district_code": "11",
    "latitude": -6.9839816953,
    "longitude": 107.4289092348,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Sukarasa",
    "district_code": "01",
    "latitude": -6.8742274703,
    "longitude": 107.5853961716,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Gegerkalong",
    "district_code": "01",
    "latitude": -6.8693504466,
    "longitude": 107.5888650077,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Isola",
    "district_code": "01",
    "latitude": -6.8535361376,
    "longitude": 107.5930973484,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Sarijadi",
    "district_code": "01",
    "latitude": -6.8758006778,
    "longitude": 107.5771603393,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cipaganti",
    "district_code": "02",
    "latitude": -6.8904319581,
    "longitude": 107.6040097219,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Lebak Gede",
    "district_code": "02",
    "latitude": -6.8926447951,
    "longitude": 107.616164005,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Sadang Serang",
    "district_code": "02",
    "latitude": -6.8944329519,
    "longitude": 107.6239144079,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Dago",
    "district_code": "02",
    "latitude": -6.8746450607,
    "longitude": 107.6157555289,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Sekeloa",
    "district_code": "02",
    "latitude": -6.8865521899,
    "longitude": 107.6208804854,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Lebak Siliwangi",
    "district_code": "02",
    "latitude": -6.8910359325,
    "longitude": 107.6098318692,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Babakan Ciparay",
    "district_code": "03",
    "latitude": -6.9416467929,
    "longitude": 107.5798399234,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Babakan",
    "district_code": "03",
    "latitude": -6.9343633382,
    "longitude": 107.5754137324,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Sukahaji",
    "district_code": "03",
    "latitude": -6.926799933,
    "longitude": 107.5831076989,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Margahayu Utara",
    "district_code": "03",
    "latitude": -6.9482850269,
    "longitude": 107.5753838173,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Margasuka",
    "district_code": "03",
    "latitude": -6.9542321075,
    "longitude": 107.5754889502,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Cirangrang",
    "district_code": "03",
    "latitude": -6.9573656103,
    "longitude": 107.5856244133,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Kopo",
    "district_code": "04",
    "latitude": -6.9413152293,
    "longitude": 107.587421686,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Babakan Tarogong",
    "district_code": "04",
    "latitude": -6.9272913667,
    "longitude": 107.5905327761,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Jamika",
    "district_code": "04",
    "latitude": -6.9224301702,
    "longitude": 107.5890791118,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Babakan Asih",
    "district_code": "04",
    "latitude": -6.9315336185,
    "longitude": 107.5945371365,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Suka Asih",
    "district_code": "04",
    "latitude": -6.9337535953,
    "longitude": 107.588996985,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Maleber",
    "district_code": "05",
    "latitude": -6.909335225,
    "longitude": 107.5724251959,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Dungus Cariang",
    "district_code": "05",
    "latitude": -6.9142357391,
    "longitude": 107.5807097813,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Ciroyom",
    "district_code": "05",
    "latitude": -6.9158798344,
    "longitude": 107.588226918,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Kebon Jeruk",
    "district_code": "05",
    "latitude": -6.9172158831,
    "longitude": 107.5988344724,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Garuda",
    "district_code": "05",
    "latitude": -6.911873531,
    "longitude": 107.5760087293,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Campaka",
    "district_code": "05",
    "latitude": -6.8998016605,
    "longitude": 107.5661417039,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Husein Sastranegara",
    "district_code": "06",
    "latitude": -6.9019982052,
    "longitude": 107.5794047693,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Arjuna",
    "district_code": "06",
    "latitude": -6.9104174949,
    "longitude": 107.5934453348,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Pajajaran",
    "district_code": "06",
    "latitude": -6.8991859781,
    "longitude": 107.5872768023,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Pasirkaliki",
    "district_code": "06",
    "latitude": -6.9076378947,
    "longitude": 107.6008350887,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Pamoyanan",
    "district_code": "06",
    "latitude": -6.9030580436,
    "longitude": 107.5938956324,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Sukaraja",
    "district_code": "06",
    "latitude": -6.8924840377,
    "longitude": 107.5669534471,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Pasteur",
    "district_code": "07",
    "latitude": -6.8908926017,
    "longitude": 107.5994787349,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cipedes",
    "district_code": "07",
    "latitude": -6.8859310951,
    "longitude": 107.5935900408,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Sukawarna",
    "district_code": "07",
    "latitude": -6.8862519093,
    "longitude": 107.5776358192,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Sukagalih",
    "district_code": "07",
    "latitude": -6.8866981188,
    "longitude": 107.5864203167,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Sukabungah",
    "district_code": "07",
    "latitude": -6.8957445301,
    "longitude": 107.5942117764,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Hegarmanah",
    "district_code": "08",
    "latitude": -6.8747249923,
    "longitude": 107.6008689852,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Ciumbuleuit",
    "district_code": "08",
    "latitude": -6.8617422409,
    "longitude": 107.6112145386,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Ledeng",
    "district_code": "08",
    "latitude": -6.8554239727,
    "longitude": 107.5992047747,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cihapit",
    "district_code": "09",
    "latitude": -6.9082699619,
    "longitude": 107.6269707838,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Taman Sari",
    "district_code": "09",
    "latitude": -6.901521399,
    "longitude": 107.6072593149,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Citarum",
    "district_code": "09",
    "latitude": -6.9044395569,
    "longitude": 107.616364461,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Karasak",
    "district_code": "10",
    "latitude": -6.9488921381,
    "longitude": 107.6077223186,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Nyengseret",
    "district_code": "10",
    "latitude": -6.9308039898,
    "longitude": 107.6016024082,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Karang Anyar",
    "district_code": "10",
    "latitude": -6.9235281977,
    "longitude": 107.6013502924,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Panjunan",
    "district_code": "10",
    "latitude": -6.9297092574,
    "longitude": 107.5980327699,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Cibadak",
    "district_code": "10",
    "latitude": -6.9231611807,
    "longitude": 107.595890694,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Pelindung Hewan",
    "district_code": "10",
    "latitude": -6.9399515794,
    "longitude": 107.6031493579,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cigereleng",
    "district_code": "11",
    "latitude": -6.9408039025,
    "longitude": 107.6107010298,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Ancol",
    "district_code": "11",
    "latitude": -6.9406477362,
    "longitude": 107.6162940639,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Pungkur",
    "district_code": "11",
    "latitude": -6.9299451788,
    "longitude": 107.6073359378,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Balong Gede",
    "district_code": "11",
    "latitude": -6.9256925285,
    "longitude": 107.6078192764,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Ciseureuh",
    "district_code": "11",
    "latitude": -6.9507360692,
    "longitude": 107.6128805385,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Ciateul",
    "district_code": "11",
    "latitude": -6.934461643,
    "longitude": 107.607916263,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Pasirluyu",
    "district_code": "11",
    "latitude": -6.9486762071,
    "longitude": 107.6190422465,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Gumuruh",
    "district_code": "12",
    "latitude": -6.9380846592,
    "longitude": 107.6371425133,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Maleer",
    "district_code": "12",
    "latitude": -6.9266687791,
    "longitude": 107.6395882461,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Cibangkong",
    "district_code": "12",
    "latitude": -6.923723882,
    "longitude": 107.6335688838,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Kacapiring",
    "district_code": "12",
    "latitude": -6.9177023026,
    "longitude": 107.6340132279,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Kebon Waru",
    "district_code": "12",
    "latitude": -6.916335456,
    "longitude": 107.6412082766,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Kebon Gedang",
    "district_code": "12",
    "latitude": -6.9264975162,
    "longitude": 107.6428350314,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Samoja",
    "district_code": "12",
    "latitude": -6.9215561098,
    "longitude": 107.6272774036,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1008",
    "subdistrict_name": "Binong",
    "district_code": "12",
    "latitude": -6.9380885146,
    "longitude": 107.640653415,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cijagra",
    "district_code": "13",
    "latitude": -6.944189322,
    "longitude": 107.6253476935,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Lingkar Selatan",
    "district_code": "13",
    "latitude": -6.9293179717,
    "longitude": 107.6295243918,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Burangrang",
    "district_code": "13",
    "latitude": -6.929631885,
    "longitude": 107.618194852,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Paledang",
    "district_code": "13",
    "latitude": -6.9248000341,
    "longitude": 107.6146954902,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Turangga",
    "district_code": "13",
    "latitude": -6.938575191,
    "longitude": 107.6292775721,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Malabar",
    "district_code": "13",
    "latitude": -6.926116165,
    "longitude": 107.6215267053,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Cikawao",
    "district_code": "13",
    "latitude": -6.9265289479,
    "longitude": 107.6121569915,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Padasuka",
    "district_code": "14",
    "latitude": -6.9037492662,
    "longitude": 107.6476115276,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cikutra",
    "district_code": "14",
    "latitude": -6.9028021855,
    "longitude": 107.639951049,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Cicadas",
    "district_code": "14",
    "latitude": -6.906276725,
    "longitude": 107.6372800362,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Sukamaju",
    "district_code": "14",
    "latitude": -6.9085881893,
    "longitude": 107.6340448467,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Sukapada",
    "district_code": "14",
    "latitude": -6.895961439,
    "longitude": 107.6467879011,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Pasirlayung",
    "district_code": "14",
    "latitude": -6.895070281,
    "longitude": 107.6564303598,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cijerah",
    "district_code": "15",
    "latitude": -6.9188856474,
    "longitude": 107.5671994925,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cibuntu",
    "district_code": "15",
    "latitude": -6.9216418239,
    "longitude": 107.5717463382,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Warung Muncang",
    "district_code": "15",
    "latitude": -6.923983578,
    "longitude": 107.5770328565,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Caringin",
    "district_code": "15",
    "latitude": -6.9311282219,
    "longitude": 107.5704699906,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Cigondewah Kaler",
    "district_code": "15",
    "latitude": -6.9350995018,
    "longitude": 107.562799721,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Gempol Sari",
    "district_code": "15",
    "latitude": -6.9319019893,
    "longitude": 107.5534132858,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Cigondewah Rahayu",
    "district_code": "15",
    "latitude": -6.9476999591,
    "longitude": 107.5635115733,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1008",
    "subdistrict_name": "Cigondewah Kidul",
    "district_code": "15",
    "latitude": -6.9413346698,
    "longitude": 107.5629209308,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Sukapura",
    "district_code": "16",
    "latitude": -6.9348291669,
    "longitude": 107.6514031295,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Kebon Jayanti",
    "district_code": "16",
    "latitude": -6.9274383162,
    "longitude": 107.6467960378,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Babakan Surabaya",
    "district_code": "16",
    "latitude": -6.9141377114,
    "longitude": 107.6477588335,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Cicaheum",
    "district_code": "16",
    "latitude": -6.9070015521,
    "longitude": 107.6530357363,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Babakan Sari",
    "district_code": "16",
    "latitude": -6.9231404031,
    "longitude": 107.6506392178,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Kebon Kangkung",
    "district_code": "16",
    "latitude": -6.9377048352,
    "longitude": 107.6440085205,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Situsaeur",
    "district_code": "17",
    "latitude": -6.9401936694,
    "longitude": 107.5953620655,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Kebon Lega",
    "district_code": "17",
    "latitude": -6.9470836003,
    "longitude": 107.5978333566,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Cibaduyut",
    "district_code": "17",
    "latitude": -6.9532668408,
    "longitude": 107.5931568428,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Mekar Wangi",
    "district_code": "17",
    "latitude": -6.9552217097,
    "longitude": 107.6045077498,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Cibaduyut Kidul",
    "district_code": "17",
    "latitude": -6.9597525897,
    "longitude": 107.5912103704,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Cibaduyut Wetan",
    "district_code": "17",
    "latitude": -6.958883945,
    "longitude": 107.5986708728,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cihaur Geulis",
    "district_code": "18",
    "latitude": -6.9013555562,
    "longitude": 107.6286330907,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Sukaluyu",
    "district_code": "18",
    "latitude": -6.8959605788,
    "longitude": 107.6300072038,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Neglasari",
    "district_code": "18",
    "latitude": -6.8951697061,
    "longitude": 107.6392182056,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Cigadung",
    "district_code": "18",
    "latitude": -6.8802419784,
    "longitude": 107.6277506669,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Braga",
    "district_code": "19",
    "latitude": -6.9181204325,
    "longitude": 107.6085359146,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Merdeka",
    "district_code": "19",
    "latitude": -6.913520497,
    "longitude": 107.6211534628,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Kebon Pisang",
    "district_code": "19",
    "latitude": -6.9192887566,
    "longitude": 107.617101245,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Babakan Ciamis",
    "district_code": "19",
    "latitude": -6.9114603106,
    "longitude": 107.6085570692,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Antapani Kulon",
    "district_code": "20",
    "latitude": -6.9099818766,
    "longitude": 107.656277547,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Antapani Tengah",
    "district_code": "20",
    "latitude": -6.919037662,
    "longitude": 107.6624624619,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Antapani Kidul",
    "district_code": "20",
    "latitude": -6.923232805,
    "longitude": 107.6598460341,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Cisaranten Kulon",
    "district_code": "24",
    "latitude": -6.9252561832,
    "longitude": 107.6806507933,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Cisaranten Endah",
    "district_code": "24",
    "latitude": -6.9307739297,
    "longitude": 107.6721237617,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Sukamiskin",
    "district_code": "24",
    "latitude": -6.9130698646,
    "longitude": 107.6735417856,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cisaranten Bina Harapan",
    "district_code": "24",
    "latitude": -6.9112310437,
    "longitude": 107.685214295,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Palasari",
    "district_code": "25",
    "latitude": -6.9132262171,
    "longitude": 107.7240130448,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cipadung",
    "district_code": "25",
    "latitude": -6.9242275494,
    "longitude": 107.7191387389,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Pasir Biru",
    "district_code": "25",
    "latitude": -6.9241582182,
    "longitude": 107.7240664836,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Cisurupan",
    "district_code": "25",
    "latitude": -6.9056599376,
    "longitude": 107.7231305958,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Pasir Endah",
    "district_code": "26",
    "latitude": -6.9043302456,
    "longitude": 107.6900698634,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Cigending",
    "district_code": "26",
    "latitude": -6.9105210043,
    "longitude": 107.697857042,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Pasirwangi",
    "district_code": "26",
    "latitude": -6.8994418713,
    "longitude": 107.7063268156,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Pasirjati",
    "district_code": "26",
    "latitude": -6.9027831281,
    "longitude": 107.7103435869,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Pasanggrahan",
    "district_code": "26",
    "latitude": -6.9106854941,
    "longitude": 107.7139759645,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cimincrang",
    "district_code": "27",
    "latitude": -6.9457393259,
    "longitude": 107.7049159251,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cisaranten Kidul",
    "district_code": "27",
    "latitude": -6.9494452742,
    "longitude": 107.6930639871,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Rancabolang",
    "district_code": "27",
    "latitude": -6.9619285676,
    "longitude": 107.6930531679,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Rancanumpang",
    "district_code": "27",
    "latitude": -6.9601980106,
    "longitude": 107.709862895,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cipadung Kulon",
    "district_code": "28",
    "latitude": -6.9217407781,
    "longitude": 107.7045312742,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Cipadung Kidul",
    "district_code": "28",
    "latitude": -6.9414159013,
    "longitude": 107.7116882945,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Cipadung Wetan",
    "district_code": "28",
    "latitude": -6.9316682417,
    "longitude": 107.709912152,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Mekar Mulya",
    "district_code": "28",
    "latitude": -6.9311018075,
    "longitude": 107.6999358625,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cisaranten Wetan",
    "district_code": "29",
    "latitude": -6.9239712881,
    "longitude": 107.6875597116,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Pakemitan",
    "district_code": "29",
    "latitude": -6.9208948249,
    "longitude": 107.6935024287,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Sukamulya",
    "district_code": "29",
    "latitude": -6.9202524305,
    "longitude": 107.6989586955,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Babakan Penghulu",
    "district_code": "29",
    "latitude": -6.9360815826,
    "longitude": 107.6900267124,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Jatihandap",
    "district_code": "30",
    "latitude": -6.8955767937,
    "longitude": 107.6634299066,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Karang Pamulang",
    "district_code": "30",
    "latitude": -6.8984835465,
    "longitude": 107.6719312916,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Pasir Impun",
    "district_code": "30",
    "latitude": -6.8973008041,
    "longitude": 107.6793962471,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Sindang Jaya",
    "district_code": "30",
    "latitude": -6.9010594807,
    "longitude": 107.6838322033,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Antapani Wetan",
    "district_code": "20",
    "latitude": -6.909336434,
    "longitude": 107.6640174057,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Batununggal",
    "district_code": "21",
    "latitude": -6.9525717867,
    "longitude": 107.6320055639,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Wates",
    "district_code": "21",
    "latitude": -6.9590100105,
    "longitude": 107.6155524284,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Mengger",
    "district_code": "21",
    "latitude": -6.9602515392,
    "longitude": 107.6288646432,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Kujangsari",
    "district_code": "21",
    "latitude": -6.9615085415,
    "longitude": 107.6426713209,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Sekejati",
    "district_code": "22",
    "latitude": -6.946022313,
    "longitude": 107.6550802507,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Margasari",
    "district_code": "22",
    "latitude": -6.9547911529,
    "longitude": 107.657182446,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Cijaura",
    "district_code": "22",
    "latitude": -6.9586635838,
    "longitude": 107.6507198113,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Jati Sari",
    "district_code": "22",
    "latitude": -6.9361105699,
    "longitude": 107.6616933174,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Cipamokolan",
    "district_code": "23",
    "latitude": -6.9467688135,
    "longitude": 107.675903877,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Derwati",
    "district_code": "23",
    "latitude": -6.9611215726,
    "longitude": 107.6816723885,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Manjahlega",
    "district_code": "23",
    "latitude": -6.9473010564,
    "longitude": 107.6669373958,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Mekarmulya",
    "district_code": "23",
    "latitude": -6.9627704979,
    "longitude": 107.6693709627,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1001",
    "subdistrict_name": "Pondok Rajeg",
    "district_code": "01",
    "latitude": -6.4563001948,
    "longitude": 106.8198784285,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1002",
    "subdistrict_name": "Karadenan",
    "district_code": "01",
    "latitude": -6.516946516,
    "longitude": 106.8104488239,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Harapanjaya",
    "district_code": "01",
    "latitude": -6.4614419852,
    "longitude": 106.8359958701,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1004",
    "subdistrict_name": "Nanggewer",
    "district_code": "01",
    "latitude": -6.5121238792,
    "longitude": 106.8293117675,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1005",
    "subdistrict_name": "Nanggewer Mekar",
    "district_code": "01",
    "latitude": -6.5033280654,
    "longitude": 106.8356788998,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Cibinong",
    "district_code": "01",
    "latitude": -6.4894796449,
    "longitude": 106.8531441537,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Pakansari",
    "district_code": "01",
    "latitude": -6.4880619484,
    "longitude": 106.8349786384,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1008",
    "subdistrict_name": "Tengah",
    "district_code": "01",
    "latitude": -6.4765850215,
    "longitude": 106.8259758339,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1009",
    "subdistrict_name": "Sukahati",
    "district_code": "01",
    "latitude": -6.4930125582,
    "longitude": 106.8128170364,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1010",
    "subdistrict_name": "Ciriung",
    "district_code": "01",
    "latitude": -6.4654918159,
    "longitude": 106.8660620113,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1011",
    "subdistrict_name": "Cirimekar",
    "district_code": "01",
    "latitude": -6.4739445758,
    "longitude": 106.8560664118,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1012",
    "subdistrict_name": "Pabuaran",
    "district_code": "01",
    "latitude": -6.4625832262,
    "longitude": 106.8489532,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1013",
    "subdistrict_name": "Pabuaran Mekar",
    "district_code": "01",
    "latitude": -6.4447568592,
    "longitude": 106.8480844509,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Wanaherang",
    "district_code": "02",
    "latitude": -6.4164816964,
    "longitude": 106.9450139283,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bojong Kulur",
    "district_code": "02",
    "latitude": -6.3212031526,
    "longitude": 106.9693517136,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Ciangsana",
    "district_code": "02",
    "latitude": -6.3560223569,
    "longitude": 106.9587540715,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Gunung Putri",
    "district_code": "02",
    "latitude": -6.4625471959,
    "longitude": 106.8944365025,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Bojong Nangka",
    "district_code": "02",
    "latitude": -6.431326718,
    "longitude": 106.9025330497,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Tlajung Udik",
    "district_code": "02",
    "latitude": -6.4459869678,
    "longitude": 106.9139033272,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cicadas",
    "district_code": "02",
    "latitude": -6.4323925711,
    "longitude": 106.9281179327,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cikeas Udik",
    "district_code": "02",
    "latitude": -6.403878316,
    "longitude": 106.9271744617,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Nagrak",
    "district_code": "02",
    "latitude": -6.3849916953,
    "longitude": 106.9459253438,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Karanggan",
    "district_code": "02",
    "latitude": -6.4566475381,
    "longitude": 106.8857446481,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Puspasari",
    "district_code": "03",
    "latitude": -6.4761311753,
    "longitude": 106.8745041779,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Citeureup",
    "district_code": "03",
    "latitude": -6.480605892,
    "longitude": 106.892574676,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cibanon",
    "district_code": "04",
    "latitude": -6.6292594806,
    "longitude": 106.8441121495,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Nagrak",
    "district_code": "04",
    "latitude": -6.6183344227,
    "longitude": 106.8558156046,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sukatani",
    "district_code": "04",
    "latitude": -6.6087212587,
    "longitude": 106.8410306744,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukaraja",
    "district_code": "04",
    "latitude": -6.600429342,
    "longitude": 106.8356774021,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cikeas",
    "district_code": "04",
    "latitude": -6.5916172744,
    "longitude": 106.8487729827,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Pasir Jambu",
    "district_code": "04",
    "latitude": -6.5354012181,
    "longitude": 106.8104468625,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Cimandala",
    "district_code": "04",
    "latitude": -6.5297505922,
    "longitude": 106.8244235217,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Cijujung",
    "district_code": "04",
    "latitude": -6.5309704516,
    "longitude": 106.8367173904,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Cadasngampar",
    "district_code": "04",
    "latitude": -6.5734439423,
    "longitude": 106.8409978934,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Pasirlaja",
    "district_code": "04",
    "latitude": -6.5510760016,
    "longitude": 106.8365540827,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cijayanti",
    "district_code": "05",
    "latitude": -6.6018931124,
    "longitude": 106.8702407475,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sumurbatu",
    "district_code": "05",
    "latitude": -6.5773359097,
    "longitude": 106.8788394425,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sentul",
    "district_code": "05",
    "latitude": -6.5209879905,
    "longitude": 106.851335159,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Karang Tengah",
    "district_code": "05",
    "latitude": -6.5984100361,
    "longitude": 106.937230177,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cipambuan",
    "district_code": "05",
    "latitude": -6.5575564585,
    "longitude": 106.8457462901,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kadumanggu",
    "district_code": "05",
    "latitude": -6.5448335314,
    "longitude": 106.8548456167,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Citaringgul",
    "district_code": "05",
    "latitude": -6.5689389738,
    "longitude": 106.8547549938,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Babakan Madang",
    "district_code": "05",
    "latitude": -6.5651487843,
    "longitude": 106.8669335558,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Bojong Koneng",
    "district_code": "05",
    "latitude": -6.6103893563,
    "longitude": 106.9061891694,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukamaju",
    "district_code": "06",
    "latitude": -6.4499171268,
    "longitude": 107.0499568185,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sirnagalih",
    "district_code": "06",
    "latitude": -6.4732125226,
    "longitude": 107.0904756482,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Singajaya",
    "district_code": "06",
    "latitude": -6.4707973758,
    "longitude": 107.0457085754,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Sukasirna",
    "district_code": "06",
    "latitude": -6.4964371202,
    "longitude": 107.0558649851,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sukanegara",
    "district_code": "06",
    "latitude": -6.5221797498,
    "longitude": 107.0361175791,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sukamanah",
    "district_code": "06",
    "latitude": -6.4432410273,
    "longitude": 107.0659198144,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Weninggalih",
    "district_code": "06",
    "latitude": -6.461618741,
    "longitude": 107.1002067362,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cibodas",
    "district_code": "06",
    "latitude": -6.5089034275,
    "longitude": 107.0121367362,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Jonggol",
    "district_code": "06",
    "latitude": -6.4644074763,
    "longitude": 107.0730930703,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Bendungan",
    "district_code": "06",
    "latitude": -6.4924627842,
    "longitude": 107.0863996202,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Singasari",
    "district_code": "06",
    "latitude": -6.4737058722,
    "longitude": 107.0164816594,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Balekambang",
    "district_code": "06",
    "latitude": -6.5117931836,
    "longitude": 107.0862079871,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Sukajaya",
    "district_code": "06",
    "latitude": -6.5503772033,
    "longitude": 107.0133529893,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Sukagalih",
    "district_code": "06",
    "latitude": -6.4827478838,
    "longitude": 107.1087177473,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Pasirangin",
    "district_code": "07",
    "latitude": -6.3781750216,
    "longitude": 106.9830719896,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Mekarsari",
    "district_code": "07",
    "latitude": -6.4058434903,
    "longitude": 106.9960769236,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Mampir",
    "district_code": "07",
    "latitude": -6.4304769121,
    "longitude": 106.9961568612,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Dayeuh",
    "district_code": "07",
    "latitude": -6.430553898,
    "longitude": 106.9676596505,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Gandoang",
    "district_code": "07",
    "latitude": -6.4131653171,
    "longitude": 107.014492215,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Jatisari",
    "district_code": "07",
    "latitude": -6.412711696,
    "longitude": 107.0505661452,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cileungsi Kidul",
    "district_code": "07",
    "latitude": -6.41070827,
    "longitude": 106.9693848641,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cipeucang",
    "district_code": "07",
    "latitude": -6.4236851212,
    "longitude": 107.0403388172,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Situsari",
    "district_code": "07",
    "latitude": -6.4316122815,
    "longitude": 107.0228880123,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Cipenjo",
    "district_code": "07",
    "latitude": -6.3900169649,
    "longitude": 106.9924947209,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Limusnunggal",
    "district_code": "07",
    "latitude": -6.3750064069,
    "longitude": 106.9692007507,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Cileungsi",
    "district_code": "07",
    "latitude": -6.3996946864,
    "longitude": 106.9624536375,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Karyamekar",
    "district_code": "08",
    "latitude": -6.5476737975,
    "longitude": 107.1044029051,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Babakanraden",
    "district_code": "08",
    "latitude": -6.4835995627,
    "longitude": 107.1409032662,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cikutamahi",
    "district_code": "08",
    "latitude": -6.5458610751,
    "longitude": 107.1693611367,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Kutamekar",
    "district_code": "08",
    "latitude": -6.5115702565,
    "longitude": 107.1522499476,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cariu",
    "district_code": "08",
    "latitude": -6.5101739664,
    "longitude": 107.1280526528,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Mekarwangi",
    "district_code": "08",
    "latitude": -6.5252240445,
    "longitude": 107.1081655659,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Bantarkuning",
    "district_code": "08",
    "latitude": -6.5616473211,
    "longitude": 107.1471347179,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukajadi",
    "district_code": "08",
    "latitude": -6.4902631738,
    "longitude": 107.1597217726,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tegalpanjang",
    "district_code": "08",
    "latitude": -6.4922320275,
    "longitude": 107.1165380857,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Cibatutiga",
    "district_code": "08",
    "latitude": -6.5416903579,
    "longitude": 107.1424492074,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Wargajaya",
    "district_code": "09",
    "latitude": -6.6256656159,
    "longitude": 107.0133886404,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Pabuaran",
    "district_code": "09",
    "latitude": -6.5468548195,
    "longitude": 106.9602763877,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sukadamai",
    "district_code": "09",
    "latitude": -6.5536120104,
    "longitude": 107.0619215778,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Sukawangi",
    "district_code": "09",
    "latitude": -6.651127143,
    "longitude": 107.041805464,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cibadak",
    "district_code": "09",
    "latitude": -6.5819007177,
    "longitude": 106.960217294,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sukaresmi",
    "district_code": "09",
    "latitude": -6.5348542545,
    "longitude": 107.051307276,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukamulya",
    "district_code": "09",
    "latitude": -6.5910828418,
    "longitude": 106.997217546,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukaharja",
    "district_code": "09",
    "latitude": -6.6036449347,
    "longitude": 107.0549477358,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sirnajaya",
    "district_code": "09",
    "latitude": -6.6186685938,
    "longitude": 106.9975067385,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sukamakmur",
    "district_code": "09",
    "latitude": -6.5727279457,
    "longitude": 106.9856835818,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Pengasinan",
    "district_code": "11",
    "latitude": -6.3692035145,
    "longitude": 106.6905565651,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Curug",
    "district_code": "11",
    "latitude": -6.3959909859,
    "longitude": 106.7199947476,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Gunungsindur",
    "district_code": "11",
    "latitude": -6.3845510958,
    "longitude": 106.6695669884,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Jampang",
    "district_code": "11",
    "latitude": -6.3988233678,
    "longitude": 106.6550634797,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cibadung",
    "district_code": "11",
    "latitude": -6.4035764182,
    "longitude": 106.6779472703,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cibinong",
    "district_code": "11",
    "latitude": -6.3947366587,
    "longitude": 106.6907131573,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Rawakalong",
    "district_code": "11",
    "latitude": -6.3702280923,
    "longitude": 106.7103030751,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Pabuaran",
    "district_code": "11",
    "latitude": -6.3693129995,
    "longitude": 106.6683335405,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Bojong",
    "district_code": "12",
    "latitude": -6.5274009244,
    "longitude": 106.7522673613,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Parakanjaya",
    "district_code": "12",
    "latitude": -6.5210590567,
    "longitude": 106.7623586992,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Kemang",
    "district_code": "12",
    "latitude": -6.5078448527,
    "longitude": 106.7485907779,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Pabuaran",
    "district_code": "12",
    "latitude": -6.5038798037,
    "longitude": 106.7253619781,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Semplak Barat",
    "district_code": "12",
    "latitude": -6.5435756709,
    "longitude": 106.7485996137,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Atang Senjaya",
    "district_code": "12",
    "latitude": -6.5407208805,
    "longitude": 106.7586829838,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Jampang",
    "district_code": "12",
    "latitude": -6.4747638346,
    "longitude": 106.7265666958,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Pondok Udik",
    "district_code": "12",
    "latitude": -6.4910070813,
    "longitude": 106.7371197995,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tegal",
    "district_code": "12",
    "latitude": -6.4836363881,
    "longitude": 106.7095295206,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Bojongbaru",
    "district_code": "13",
    "latitude": -6.4768496673,
    "longitude": 106.8095821019,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cimanggis",
    "district_code": "13",
    "latitude": -6.5038603087,
    "longitude": 106.7763200515,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Susukan",
    "district_code": "13",
    "latitude": -6.4693349104,
    "longitude": 106.7901880003,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Ragajaya",
    "district_code": "13",
    "latitude": -6.4455090562,
    "longitude": 106.7822390863,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Kedungwaringin",
    "district_code": "13",
    "latitude": -6.4964941849,
    "longitude": 106.7938439414,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Waringinjaya",
    "district_code": "13",
    "latitude": -6.5085381032,
    "longitude": 106.7911142528,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Pabuaran",
    "district_code": "13",
    "latitude": -6.4607785379,
    "longitude": 106.7985502181,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Rawapanjang",
    "district_code": "13",
    "latitude": -6.4582175505,
    "longitude": 106.8095305253,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Bojonggede",
    "district_code": "13",
    "latitude": -6.4866215623,
    "longitude": 106.8000347575,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Leuwiliang",
    "district_code": "14",
    "latitude": -6.5662582253,
    "longitude": 106.630290306,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Purasari",
    "district_code": "14",
    "latitude": -6.6993665694,
    "longitude": 106.6013725154,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Karyasari",
    "district_code": "14",
    "latitude": -6.6382294682,
    "longitude": 106.6202101799,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Pabangbon",
    "district_code": "14",
    "latitude": -6.6273523698,
    "longitude": 106.590202788,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Karacak",
    "district_code": "14",
    "latitude": -6.6203180783,
    "longitude": 106.6291978797,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Barengkok",
    "district_code": "14",
    "latitude": -6.5980586668,
    "longitude": 106.6355075952,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Leuwimekar",
    "district_code": "14",
    "latitude": -6.5830127475,
    "longitude": 106.6330862993,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Puraseda",
    "district_code": "14",
    "latitude": -6.6672000437,
    "longitude": 106.5972609523,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Cibeber I",
    "district_code": "14",
    "latitude": -6.575894762,
    "longitude": 106.6193252937,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Cibeber II",
    "district_code": "14",
    "latitude": -6.601399535,
    "longitude": 106.6161259505,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Karehkel",
    "district_code": "14",
    "latitude": -6.549417417,
    "longitude": 106.6346974251,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Ciampea",
    "district_code": "15",
    "latitude": -6.5428167888,
    "longitude": 106.6891740284,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cinangka",
    "district_code": "15",
    "latitude": -6.591855159,
    "longitude": 106.7001381185,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cihideungudik",
    "district_code": "15",
    "latitude": -6.5816504732,
    "longitude": 106.7156183027,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Bojongjengkol",
    "district_code": "15",
    "latitude": -6.5747991594,
    "longitude": 106.7097657404,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Tegalwaru",
    "district_code": "15",
    "latitude": -6.5729059965,
    "longitude": 106.6986095134,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cibuntu",
    "district_code": "15",
    "latitude": -6.5942140972,
    "longitude": 106.6850938707,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cicadas",
    "district_code": "15",
    "latitude": -6.5785630609,
    "longitude": 106.6830499449,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cibadak",
    "district_code": "15",
    "latitude": -6.5598076551,
    "longitude": 106.68737008,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Bojongrangkas",
    "district_code": "15",
    "latitude": -6.5601215851,
    "longitude": 106.6950782594,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Cihideunghilir",
    "district_code": "15",
    "latitude": -6.5700466732,
    "longitude": 106.7220093684,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Cibanteng",
    "district_code": "15",
    "latitude": -6.5566241179,
    "longitude": 106.7112596426,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Benteng",
    "district_code": "15",
    "latitude": -6.5461959602,
    "longitude": 106.7029027981,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Ciampea Udik",
    "district_code": "15",
    "latitude": -6.6119352241,
    "longitude": 106.6829922065,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Situ Udik",
    "district_code": "16",
    "latitude": -6.6189563423,
    "longitude": 106.6519724256,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Situ Ilir",
    "district_code": "16",
    "latitude": -6.6026323772,
    "longitude": 106.6534181227,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cemplang",
    "district_code": "16",
    "latitude": -6.5789988287,
    "longitude": 106.6484202655,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cibatok I",
    "district_code": "16",
    "latitude": -6.5816278281,
    "longitude": 106.6658845591,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciaruteun Udik",
    "district_code": "16",
    "latitude": -6.6041913901,
    "longitude": 106.6740020701,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Leuweungkolot",
    "district_code": "16",
    "latitude": -6.5592046276,
    "longitude": 106.6747543907,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cimanggu I",
    "district_code": "16",
    "latitude": -6.562168889,
    "longitude": 106.6655510449,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cimanggu II",
    "district_code": "16",
    "latitude": -6.5695918884,
    "longitude": 106.6617376014,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Dukuh",
    "district_code": "16",
    "latitude": -6.5656707439,
    "longitude": 106.6529042898,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Cijujung",
    "district_code": "16",
    "latitude": -6.5509038118,
    "longitude": 106.6538828857,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Ciaruteun Ilir",
    "district_code": "16",
    "latitude": -6.5403214363,
    "longitude": 106.6752907267,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Cibatok II",
    "district_code": "16",
    "latitude": -6.5926558407,
    "longitude": 106.6672744228,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Sukamaju",
    "district_code": "16",
    "latitude": -6.588806103,
    "longitude": 106.6533179916,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Galuga",
    "district_code": "16",
    "latitude": -6.565459703,
    "longitude": 106.6422413049,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2015",
    "subdistrict_name": "Girimulya",
    "district_code": "16",
    "latitude": -6.5705325728,
    "longitude": 106.6766753603,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Gunungsari",
    "district_code": "17",
    "latitude": -6.6994218541,
    "longitude": 106.6848261711,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2015",
    "subdistrict_name": "Ciasmara",
    "district_code": "17",
    "latitude": -6.7059921379,
    "longitude": 106.6617698078,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Rumpin",
    "district_code": "18",
    "latitude": -6.4400036498,
    "longitude": 106.6442830679,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Leuwibatu",
    "district_code": "18",
    "latitude": -6.5281707833,
    "longitude": 106.6199082455,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cidokom",
    "district_code": "18",
    "latitude": -6.5187200393,
    "longitude": 106.6745254406,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Gobang",
    "district_code": "18",
    "latitude": -6.5143685129,
    "longitude": 106.6479437902,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cibodas",
    "district_code": "18",
    "latitude": -6.4894542675,
    "longitude": 106.6626342679,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Rabak",
    "district_code": "18",
    "latitude": -6.487295986,
    "longitude": 106.6296162571,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Kampungsawah",
    "district_code": "18",
    "latitude": -6.4593264772,
    "longitude": 106.6324006971,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cipinang",
    "district_code": "18",
    "latitude": -6.4432632403,
    "longitude": 106.614388883,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Sukasari",
    "district_code": "18",
    "latitude": -6.4189456847,
    "longitude": 106.6223784229,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Tamansari",
    "district_code": "18",
    "latitude": -6.3980108611,
    "longitude": 106.6287205279,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Kertajaya",
    "district_code": "18",
    "latitude": -6.3963496864,
    "longitude": 106.6027497768,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Sukamulya",
    "district_code": "18",
    "latitude": -6.3721400252,
    "longitude": 106.632286156,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Mekarsari",
    "district_code": "18",
    "latitude": -6.375974712,
    "longitude": 106.6035301328,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Mekarjaya",
    "district_code": "18",
    "latitude": -6.5313235548,
    "longitude": 106.6596759397,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Curug",
    "district_code": "19",
    "latitude": -6.4973206219,
    "longitude": 106.4252829655,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Pangradin",
    "district_code": "19",
    "latitude": -6.5249863372,
    "longitude": 106.4788739149,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Kalongsawah",
    "district_code": "19",
    "latitude": -6.5032719571,
    "longitude": 106.494563065,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Sipak",
    "district_code": "19",
    "latitude": -6.4868217952,
    "longitude": 106.4833586483,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Jasinga",
    "district_code": "19",
    "latitude": -6.4836836209,
    "longitude": 106.4503211367,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Koleang",
    "district_code": "19",
    "latitude": -6.4653138344,
    "longitude": 106.4384238086,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cikopomayak",
    "district_code": "19",
    "latitude": -6.4492170479,
    "longitude": 106.4651160843,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Setu",
    "district_code": "19",
    "latitude": -6.4673825609,
    "longitude": 106.4687613107,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Barengkok",
    "district_code": "19",
    "latitude": -6.4301684638,
    "longitude": 106.4871731793,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Bagoang",
    "district_code": "19",
    "latitude": -6.4292515171,
    "longitude": 106.455797905,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Pangaur",
    "district_code": "19",
    "latitude": -6.3968114936,
    "longitude": 106.4616750124,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Pamagersari",
    "district_code": "19",
    "latitude": -6.4876794482,
    "longitude": 106.4654033984,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Jugala Jaya",
    "district_code": "19",
    "latitude": -6.5268674369,
    "longitude": 106.4560102078,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Tegalwangi",
    "district_code": "19",
    "latitude": -6.4649307289,
    "longitude": 106.4185105185,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2015",
    "subdistrict_name": "Neglasari",
    "district_code": "19",
    "latitude": -6.4494105003,
    "longitude": 106.4492913851,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2016",
    "subdistrict_name": "Wirajaya",
    "district_code": "19",
    "latitude": -6.5257538088,
    "longitude": 106.4216405982,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Jagabaya",
    "district_code": "20",
    "latitude": -6.3937910927,
    "longitude": 106.5329950691,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Gorowong",
    "district_code": "20",
    "latitude": -6.3992264984,
    "longitude": 106.558199875,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Dago",
    "district_code": "20",
    "latitude": -6.4064830912,
    "longitude": 106.5848973593,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Pingku",
    "district_code": "20",
    "latitude": -6.3758114596,
    "longitude": 106.569062808,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cikuda",
    "district_code": "20",
    "latitude": -6.3775418625,
    "longitude": 106.5839733798,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Parungpanjang",
    "district_code": "20",
    "latitude": -6.3496152484,
    "longitude": 106.5672975258,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Lumpang",
    "district_code": "20",
    "latitude": -6.3621240472,
    "longitude": 106.5454259025,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cibunar",
    "district_code": "20",
    "latitude": -6.3422016808,
    "longitude": 106.5516510532,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Jagabita",
    "district_code": "20",
    "latitude": -6.3345890663,
    "longitude": 106.5290913302,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Gintungcilejet",
    "district_code": "20",
    "latitude": -6.3686070862,
    "longitude": 106.524924901,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Kabasiran",
    "district_code": "20",
    "latitude": -6.3536016026,
    "longitude": 106.5782816408,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2015",
    "subdistrict_name": "Tegallega",
    "district_code": "22",
    "latitude": -6.4625053212,
    "longitude": 106.5889456358,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukamaju",
    "district_code": "22",
    "latitude": -6.5477343909,
    "longitude": 106.511416099,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cigudeg",
    "district_code": "22",
    "latitude": -6.5540621458,
    "longitude": 106.538298156,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Bunar",
    "district_code": "22",
    "latitude": -6.5304160786,
    "longitude": 106.5002477819,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Banyuresmi",
    "district_code": "22",
    "latitude": -6.5268105559,
    "longitude": 106.581876106,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cintamanik",
    "district_code": "22",
    "latitude": -6.4923166822,
    "longitude": 106.5315363733,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Argapura",
    "district_code": "22",
    "latitude": -6.4639032184,
    "longitude": 106.5032782006,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Bangunjaya",
    "district_code": "22",
    "latitude": -6.4511132088,
    "longitude": 106.5385341748,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Rengasjajar",
    "district_code": "22",
    "latitude": -6.446290183,
    "longitude": 106.5627574517,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Batujajar",
    "district_code": "22",
    "latitude": -6.4332808216,
    "longitude": 106.5820710554,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Wargajaya",
    "district_code": "22",
    "latitude": -6.529048052,
    "longitude": 106.5344454867,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Sukaraksa",
    "district_code": "22",
    "latitude": -6.5834012651,
    "longitude": 106.5248822595,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Banyuwangi",
    "district_code": "22",
    "latitude": -6.5058312007,
    "longitude": 106.557759829,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Banyuasih",
    "district_code": "22",
    "latitude": -6.4906593017,
    "longitude": 106.5898741935,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Mekarjaya",
    "district_code": "22",
    "latitude": -6.5145285909,
    "longitude": 106.5112584454,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Tapos",
    "district_code": "23",
    "latitude": -6.4003529007,
    "longitude": 106.4953941709,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Ciomas",
    "district_code": "23",
    "latitude": -6.4194811799,
    "longitude": 106.525072655,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Batok",
    "district_code": "23",
    "latitude": -6.3657604414,
    "longitude": 106.5037156853,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Babakan",
    "district_code": "23",
    "latitude": -6.3645158131,
    "longitude": 106.4707725932,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Tenjo",
    "district_code": "23",
    "latitude": -6.3309694895,
    "longitude": 106.4542768547,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cilaku",
    "district_code": "23",
    "latitude": -6.3373299059,
    "longitude": 106.474122285,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Singabraja",
    "district_code": "23",
    "latitude": -6.3518912457,
    "longitude": 106.4405348995,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Singabangsa",
    "district_code": "23",
    "latitude": -6.314830075,
    "longitude": 106.4680796916,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Bojong",
    "district_code": "23",
    "latitude": -6.3809941457,
    "longitude": 106.4419751195,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cileungsi",
    "district_code": "24",
    "latitude": -6.7237925479,
    "longitude": 106.8943512682,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Citapen",
    "district_code": "24",
    "latitude": -6.6991092536,
    "longitude": 106.8709611856,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cibedug",
    "district_code": "24",
    "latitude": -6.7098248155,
    "longitude": 106.8935533522,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Jambuluwuk",
    "district_code": "24",
    "latitude": -6.689979315,
    "longitude": 106.8795333119,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Banjarsari",
    "district_code": "24",
    "latitude": -6.6837520158,
    "longitude": 106.8704237572,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Telukpinang",
    "district_code": "24",
    "latitude": -6.6819229388,
    "longitude": 106.8515725106,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Banjar Waru",
    "district_code": "24",
    "latitude": -6.6696184681,
    "longitude": 106.8550391844,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Bendungan",
    "district_code": "24",
    "latitude": -6.6659488902,
    "longitude": 106.8623833333,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Pandan Sari",
    "district_code": "24",
    "latitude": -6.6486588075,
    "longitude": 106.8546992726,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Bojong Murni",
    "district_code": "24",
    "latitude": -6.7350325256,
    "longitude": 106.9287553267,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Banjar Wangi",
    "district_code": "24",
    "latitude": -6.681641529,
    "longitude": 106.85986669,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Ciawi",
    "district_code": "24",
    "latitude": -6.6590562103,
    "longitude": 106.8491297557,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Bitungsari",
    "district_code": "24",
    "latitude": -6.6827081931,
    "longitude": 106.8418626,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Batulayang",
    "district_code": "25",
    "latitude": -6.6756265911,
    "longitude": 106.9476745893,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Jogjogan",
    "district_code": "25",
    "latitude": -6.6624379991,
    "longitude": 106.9352531633,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cibeureum",
    "district_code": "25",
    "latitude": -6.7193504161,
    "longitude": 106.949498571,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cilember",
    "district_code": "25",
    "latitude": -6.6523107996,
    "longitude": 106.9206984057,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Citeko",
    "district_code": "25",
    "latitude": -6.7011203915,
    "longitude": 106.9337661252,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Tugu Selatan",
    "district_code": "25",
    "latitude": -6.7206462022,
    "longitude": 106.9707085911,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Leuwimalang",
    "district_code": "25",
    "latitude": -6.6655242901,
    "longitude": 106.9250796602,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Kopo",
    "district_code": "25",
    "latitude": -6.667502298,
    "longitude": 106.9116677073,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tugu Utara",
    "district_code": "25",
    "latitude": -6.6850758481,
    "longitude": 106.9793282546,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1010",
    "subdistrict_name": "Cisarua",
    "district_code": "25",
    "latitude": -6.6780493268,
    "longitude": 106.9364325551,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukamaju",
    "district_code": "26",
    "latitude": -6.6806243703,
    "longitude": 106.8863390761,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Kuta",
    "district_code": "26",
    "latitude": -6.698288029,
    "longitude": 106.9220812624,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciherang Pondok",
    "district_code": "27",
    "latitude": -6.6880417986,
    "longitude": 106.8299677882,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cinagara",
    "district_code": "27",
    "latitude": -6.7473493267,
    "longitude": 106.8545339294,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cimande",
    "district_code": "27",
    "latitude": -6.7462895829,
    "longitude": 106.8948354585,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Pancawati",
    "district_code": "27",
    "latitude": -6.7275344007,
    "longitude": 106.8811830261,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Muarajaya",
    "district_code": "27",
    "latitude": -6.7223617666,
    "longitude": 106.8175941961,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Pasirbuncir",
    "district_code": "27",
    "latitude": -6.7564495325,
    "longitude": 106.8509119649,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Lemah Duhur",
    "district_code": "27",
    "latitude": -6.7232958484,
    "longitude": 106.8484228699,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Tangkil",
    "district_code": "27",
    "latitude": -6.7548899594,
    "longitude": 106.8830560822,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cijeruk",
    "district_code": "28",
    "latitude": -6.7094398121,
    "longitude": 106.7724274878,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cipelang",
    "district_code": "28",
    "latitude": -6.697083421,
    "longitude": 106.7760908953,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Warung Menteng",
    "district_code": "28",
    "latitude": -6.7039709151,
    "longitude": 106.807165064,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Tajur Halang",
    "district_code": "28",
    "latitude": -6.6803972593,
    "longitude": 106.7734245354,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cipicung",
    "district_code": "28",
    "latitude": -6.6746034518,
    "longitude": 106.805037199,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cibalung",
    "district_code": "28",
    "latitude": -6.6863433047,
    "longitude": 106.8113706418,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukaharja",
    "district_code": "28",
    "latitude": -6.6718570998,
    "longitude": 106.7670480664,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Palasari",
    "district_code": "28",
    "latitude": -6.6590674472,
    "longitude": 106.7993469712,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tanjungsari",
    "district_code": "28",
    "latitude": -6.6787459659,
    "longitude": 106.7868136881,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Mekarjaya",
    "district_code": "29",
    "latitude": -6.6115215306,
    "longitude": 106.7770584297,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sukaharja",
    "district_code": "29",
    "latitude": -6.6127765623,
    "longitude": 106.7436850726,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1003",
    "subdistrict_name": "Padasuka",
    "district_code": "29",
    "latitude": -6.5954348648,
    "longitude": 106.7597305995,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Parakan",
    "district_code": "29",
    "latitude": -6.6209697168,
    "longitude": 106.7690920991,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Ciomas",
    "district_code": "29",
    "latitude": -6.6071607196,
    "longitude": 106.7694555175,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Pagelaran",
    "district_code": "29",
    "latitude": -6.6118260719,
    "longitude": 106.7616682516,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukamakmur",
    "district_code": "29",
    "latitude": -6.6130619372,
    "longitude": 106.7517500007,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Ciapus",
    "district_code": "29",
    "latitude": -6.5984155308,
    "longitude": 106.7488678392,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Kota Batu",
    "district_code": "29",
    "latitude": -6.6272420526,
    "longitude": 106.7816841502,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Laladon",
    "district_code": "29",
    "latitude": -6.5841758981,
    "longitude": 106.7544972591,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Ciomas Rahayu",
    "district_code": "29",
    "latitude": -6.5931899005,
    "longitude": 106.7648522256,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukadamai",
    "district_code": "30",
    "latitude": -6.6201757194,
    "longitude": 106.7325393149,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Ciherang",
    "district_code": "30",
    "latitude": -6.5842413595,
    "longitude": 106.7449210621,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sinarsari",
    "district_code": "30",
    "latitude": -6.5822409108,
    "longitude": 106.7330729712,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Sukawening",
    "district_code": "30",
    "latitude": -6.6013635207,
    "longitude": 106.7356464331,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Petir",
    "district_code": "30",
    "latitude": -6.6093410726,
    "longitude": 106.7231898929,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Purwasari",
    "district_code": "30",
    "latitude": -6.6214909347,
    "longitude": 106.7160384795,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cikarawang",
    "district_code": "30",
    "latitude": -6.5459096352,
    "longitude": 106.7304266393,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Babakan",
    "district_code": "30",
    "latitude": -6.5567756382,
    "longitude": 106.7256256568,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Dramaga",
    "district_code": "30",
    "latitude": -6.5725450021,
    "longitude": 106.7357603512,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Neglasari",
    "district_code": "30",
    "latitude": -6.5873884638,
    "longitude": 106.7259239251,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Sukamantri",
    "district_code": "31",
    "latitude": -6.6486046192,
    "longitude": 106.7716067585,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Sirnagalih",
    "district_code": "31",
    "latitude": -6.6358862533,
    "longitude": 106.7709945892,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Pasireurih",
    "district_code": "31",
    "latitude": -6.6375774633,
    "longitude": 106.7615378759,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Tamansari",
    "district_code": "31",
    "latitude": -6.677981588,
    "longitude": 106.743527067,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sukaluyu",
    "district_code": "31",
    "latitude": -6.6396111388,
    "longitude": 106.7434076934,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Sukaresmi",
    "district_code": "31",
    "latitude": -6.632333415,
    "longitude": 106.7532151084,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukajaya",
    "district_code": "31",
    "latitude": -6.6446450607,
    "longitude": 106.7340127516,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukajadi",
    "district_code": "31",
    "latitude": -6.6481012917,
    "longitude": 106.7240811697,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Klapanunggal",
    "district_code": "32",
    "latitude": -6.4667272928,
    "longitude": 106.9590872338,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bojong",
    "district_code": "32",
    "latitude": -6.4520014864,
    "longitude": 106.9985191103,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Nambo",
    "district_code": "32",
    "latitude": -6.4765695847,
    "longitude": 106.9304826255,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Lulut",
    "district_code": "32",
    "latitude": -6.4920310221,
    "longitude": 106.9154280097,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cikahuripan",
    "district_code": "32",
    "latitude": -6.4546036682,
    "longitude": 106.9760327651,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kembang Kuning",
    "district_code": "32",
    "latitude": -6.4494979001,
    "longitude": 106.9388737576,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Bantar Jati",
    "district_code": "32",
    "latitude": -6.4688959877,
    "longitude": 106.9044515641,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Leuwikaret",
    "district_code": "32",
    "latitude": -6.5162220078,
    "longitude": 106.9431530183,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Ligarmukti",
    "district_code": "32",
    "latitude": -6.495401241,
    "longitude": 106.9793962072,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Putat Nutug",
    "district_code": "33",
    "latitude": -6.4648863081,
    "longitude": 106.6692867399,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Ciseeng",
    "district_code": "33",
    "latitude": -6.4495666647,
    "longitude": 106.6871189321,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Parigi Mekar",
    "district_code": "33",
    "latitude": -6.4504070086,
    "longitude": 106.6976246078,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cibentang",
    "district_code": "33",
    "latitude": -6.4404715303,
    "longitude": 106.6759522382,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cibeuteung Udik",
    "district_code": "33",
    "latitude": -6.486804177,
    "longitude": 106.6909751262,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Karihkil",
    "district_code": "33",
    "latitude": -6.4902197078,
    "longitude": 106.6792211644,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Babakan",
    "district_code": "33",
    "latitude": -6.4656624546,
    "longitude": 106.6978901974,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Cihoe",
    "district_code": "33",
    "latitude": -6.4315139194,
    "longitude": 106.6835306754,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Cibeuteung Muara",
    "district_code": "33",
    "latitude": -6.4455286374,
    "longitude": 106.6639429459,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Kuripan",
    "district_code": "33",
    "latitude": -6.421905187,
    "longitude": 106.6632503882,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Bantarjaya",
    "district_code": "34",
    "latitude": -6.5327818775,
    "longitude": 106.7318776683,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Bantarsari",
    "district_code": "34",
    "latitude": -6.5239452034,
    "longitude": 106.7375502794,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Pasirgaok",
    "district_code": "34",
    "latitude": -6.5360806664,
    "longitude": 106.7185142353,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Rancabungur",
    "district_code": "34",
    "latitude": -6.5325274797,
    "longitude": 106.7038850293,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Mekarsari",
    "district_code": "34",
    "latitude": -6.5132598654,
    "longitude": 106.6904216917,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Candali",
    "district_code": "34",
    "latitude": -6.5043678221,
    "longitude": 106.7018280761,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cimulang",
    "district_code": "34",
    "latitude": -6.5209065547,
    "longitude": 106.7132505464,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cisarua",
    "district_code": "35",
    "latitude": -6.6669653126,
    "longitude": 106.4564239471,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Kiarasari",
    "district_code": "35",
    "latitude": -6.688199437,
    "longitude": 106.4877381837,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sukajaya",
    "district_code": "35",
    "latitude": -6.5894910458,
    "longitude": 106.5115404098,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Cipayung",
    "district_code": "35",
    "latitude": -6.5751330806,
    "longitude": 106.5031507977,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cileuksa",
    "district_code": "35",
    "latitude": -6.5929802639,
    "longitude": 106.4413039642,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kiarapandak",
    "district_code": "35",
    "latitude": -6.6215829875,
    "longitude": 106.490649685,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Harkatjaya",
    "district_code": "35",
    "latitude": -6.6057991208,
    "longitude": 106.5090546365,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sukamulih",
    "district_code": "35",
    "latitude": -6.5675087409,
    "longitude": 106.4845497064,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Pasir Madang",
    "district_code": "35",
    "latitude": -6.5948843311,
    "longitude": 106.46695977,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Urug",
    "district_code": "35",
    "latitude": -6.6257996888,
    "longitude": 106.5027807293,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Jayaraharja",
    "district_code": "35",
    "latitude": -6.5963401491,
    "longitude": 106.4957949094,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Tanjungsari",
    "district_code": "36",
    "latitude": -6.626022879,
    "longitude": 107.1403306626,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Selawangi",
    "district_code": "36",
    "latitude": -6.5774429792,
    "longitude": 107.0901256834,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Tanjungrasa",
    "district_code": "36",
    "latitude": -6.5765016508,
    "longitude": 107.1347591967,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Antajaya",
    "district_code": "36",
    "latitude": -6.584714343,
    "longitude": 107.1739110309,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Pasir Tanjung",
    "district_code": "36",
    "latitude": -6.6007557575,
    "longitude": 107.1465141708,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Cibadak",
    "district_code": "36",
    "latitude": -6.623870931,
    "longitude": 107.1062811213,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sukarasa",
    "district_code": "36",
    "latitude": -6.5920097116,
    "longitude": 107.1060989584,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sirnasari",
    "district_code": "36",
    "latitude": -6.6305393544,
    "longitude": 107.151953253,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Buanajaya",
    "district_code": "36",
    "latitude": -6.61635283,
    "longitude": 107.1950395019,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Sirnarasa",
    "district_code": "36",
    "latitude": -6.6478245411,
    "longitude": 107.1337055714,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Tajurhalang",
    "district_code": "37",
    "latitude": -6.4766595987,
    "longitude": 106.7607942999,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Citayam",
    "district_code": "37",
    "latitude": -6.4440034305,
    "longitude": 106.7516197077,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sasak Panjang",
    "district_code": "37",
    "latitude": -6.4569942641,
    "longitude": 106.7624678663,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Nanggerang",
    "district_code": "37",
    "latitude": -6.4650285349,
    "longitude": 106.7785230092,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sukmajaya",
    "district_code": "37",
    "latitude": -6.4831235235,
    "longitude": 106.7811413839,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Tonjong",
    "district_code": "37",
    "latitude": -6.4911563765,
    "longitude": 106.7560949153,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Kalisuren",
    "district_code": "37",
    "latitude": -6.4660287079,
    "longitude": 106.7401362608,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cigombong",
    "district_code": "38",
    "latitude": -6.7459705279,
    "longitude": 106.8012801947,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Watesjaya",
    "district_code": "38",
    "latitude": -6.7675615047,
    "longitude": 106.8499532503,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Ciburuy",
    "district_code": "38",
    "latitude": -6.7339886516,
    "longitude": 106.810579021,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Srogol",
    "district_code": "38",
    "latitude": -6.745265868,
    "longitude": 106.821546946,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cisalada",
    "district_code": "38",
    "latitude": -6.7364827941,
    "longitude": 106.7942167764,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Tugujaya",
    "district_code": "38",
    "latitude": -6.7397427795,
    "longitude": 106.7737869339,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Pasirjaya",
    "district_code": "38",
    "latitude": -6.7244352292,
    "longitude": 106.7730002263,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Ciburayut",
    "district_code": "38",
    "latitude": -6.7195642272,
    "longitude": 106.7921525798,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Ciadeg",
    "district_code": "38",
    "latitude": -6.7171909997,
    "longitude": 106.8087732933,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Leuwisadeng",
    "district_code": "39",
    "latitude": -6.5893754388,
    "longitude": 106.6014936298,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Babakan Sadeng",
    "district_code": "39",
    "latitude": -6.5717653424,
    "longitude": 106.5805646459,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Sadeng Kolot",
    "district_code": "39",
    "latitude": -6.5904578079,
    "longitude": 106.5878905967,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Wangunjaya",
    "district_code": "39",
    "latitude": -6.5920899508,
    "longitude": 106.5776575817,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Kalong I",
    "district_code": "39",
    "latitude": -6.5547128872,
    "longitude": 106.5599629656,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Kalong II",
    "district_code": "39",
    "latitude": -6.5540763618,
    "longitude": 106.5704765303,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Sadeng",
    "district_code": "39",
    "latitude": -6.5569274857,
    "longitude": 106.5853909756,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Sibanteng",
    "district_code": "39",
    "latitude": -6.55484825,
    "longitude": 106.5997436948,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Tapos I",
    "district_code": "40",
    "latitude": -6.676994274,
    "longitude": 106.7065375048,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Leuwinutug",
    "district_code": "03",
    "latitude": -6.5137562446,
    "longitude": 106.861723207,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Tajur",
    "district_code": "03",
    "latitude": -6.5397710551,
    "longitude": 106.9205729465,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Sanja",
    "district_code": "03",
    "latitude": -6.5039055681,
    "longitude": 106.8675273012,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1006",
    "subdistrict_name": "Puspanegara",
    "district_code": "03",
    "latitude": -6.4787481896,
    "longitude": 106.880842165,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "1007",
    "subdistrict_name": "Karang Asem Barat",
    "district_code": "03",
    "latitude": -6.4907315193,
    "longitude": 106.8699400201,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Karang Asem Timur",
    "district_code": "03",
    "latitude": -6.4965900226,
    "longitude": 106.8797836789,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Tarikolot",
    "district_code": "03",
    "latitude": -6.4986074033,
    "longitude": 106.8902235265,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Gunungsari",
    "district_code": "03",
    "latitude": -6.4934191859,
    "longitude": 106.9027405452,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Tangkil",
    "district_code": "03",
    "latitude": -6.5346417941,
    "longitude": 106.8713769309,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Sukahati",
    "district_code": "03",
    "latitude": -6.5161656006,
    "longitude": 106.8828831271,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Hambalang",
    "district_code": "03",
    "latitude": -6.5483725531,
    "longitude": 106.8975991661,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2014",
    "subdistrict_name": "Pasir Mukti",
    "district_code": "03",
    "latitude": -6.5088570152,
    "longitude": 106.8984374622,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Gununggeulis",
    "district_code": "04",
    "latitude": -6.6325695473,
    "longitude": 106.8845872575,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cilebut Timur",
    "district_code": "04",
    "latitude": -6.5273911644,
    "longitude": 106.801650887,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cilebut Barat",
    "district_code": "04",
    "latitude": -6.5298811519,
    "longitude": 106.7950058854,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Parung",
    "district_code": "10",
    "latitude": -6.4266086355,
    "longitude": 106.7315503307,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Iwul",
    "district_code": "10",
    "latitude": -6.456812153,
    "longitude": 106.7151918977,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Bojongsempu",
    "district_code": "10",
    "latitude": -6.4450595783,
    "longitude": 106.7050746808,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Waru",
    "district_code": "10",
    "latitude": -6.4202941733,
    "longitude": 106.7199175064,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Cogreg",
    "district_code": "10",
    "latitude": -6.4199719153,
    "longitude": 106.6908229138,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Pamegarsari",
    "district_code": "10",
    "latitude": -6.4404795011,
    "longitude": 106.7278059357,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Warujaya",
    "district_code": "10",
    "latitude": -6.4263378598,
    "longitude": 106.7095477986,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Bojongindah",
    "district_code": "10",
    "latitude": -6.4326928354,
    "longitude": 106.7017914244,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Jabonmekar",
    "district_code": "10",
    "latitude": -6.453707792,
    "longitude": 106.7263658022,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Cidokom",
    "district_code": "11",
    "latitude": -6.4052367221,
    "longitude": 106.7069142095,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Padurenan",
    "district_code": "11",
    "latitude": -6.3910188087,
    "longitude": 106.7048257707,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2001",
    "subdistrict_name": "Purwabakti",
    "district_code": "17",
    "latitude": -6.7274290128,
    "longitude": 106.6349031288,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2002",
    "subdistrict_name": "Cibunian",
    "district_code": "17",
    "latitude": -6.696457769,
    "longitude": 106.6261449612,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2003",
    "subdistrict_name": "Cibitungwetan",
    "district_code": "17",
    "latitude": -6.6492181433,
    "longitude": 106.6386162011,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2004",
    "subdistrict_name": "Gunungmenyan",
    "district_code": "17",
    "latitude": -6.6282982185,
    "longitude": 106.6673654051,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2005",
    "subdistrict_name": "Gunungbunder II",
    "district_code": "17",
    "latitude": -6.6883825687,
    "longitude": 106.7011902919,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2006",
    "subdistrict_name": "Pasarean",
    "district_code": "17",
    "latitude": -6.6383834006,
    "longitude": 106.6600306755,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2007",
    "subdistrict_name": "Cimayang",
    "district_code": "17",
    "latitude": -6.6101008581,
    "longitude": 106.666256516,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2008",
    "subdistrict_name": "Pamijahan",
    "district_code": "17",
    "latitude": -6.6442043178,
    "longitude": 106.6503427611,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2009",
    "subdistrict_name": "Cibening",
    "district_code": "17",
    "latitude": -6.6320431878,
    "longitude": 106.6768966336,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2010",
    "subdistrict_name": "Gunungbunder I",
    "district_code": "17",
    "latitude": -6.6483658852,
    "longitude": 106.6816513714,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2011",
    "subdistrict_name": "Cibitung Kulon",
    "district_code": "17",
    "latitude": -6.6643745455,
    "longitude": 106.6405806127,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2012",
    "subdistrict_name": "Gunung Picung",
    "district_code": "17",
    "latitude": -6.678260476,
    "longitude": 106.6816583751,
    "timezone": "Asia/Jakarta"
  },
  {
    "subdistrict_code": "2013",
    "subdistrict_name": "Ciasihan",
    "district_code": "17",
    "latitude": -6.7128754302,
    "longitude": 106.6761670655,
    "timezone": "Asia/Jakarta"
  }
];
async function seedSubdistricts() {
  try {
    console.log(`Starting to seed ${subdistricts.length} subdistricts for snowflake schema...`);
    for (const subdistrict of subdistricts) {
      const districtRes = await db.query('SELECT district_id FROM forecasting.dim_district WHERE district_code = $1', [subdistrict.district_code]);
      if (districtRes.rows.length > 0) {
        const district_id = districtRes.rows[0].district_id;
        await db.query(`INSERT INTO forecasting.dim_subdistrict (subdistrict_code, subdistrict_name, district_id, latitude, longitude, timezone) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (subdistrict_code) DO NOTHING`, [subdistrict.subdistrict_code, subdistrict.subdistrict_name, district_id, subdistrict.latitude, subdistrict.longitude, subdistrict.timezone]);
      } else {
        console.error(`District with code ${subdistrict.district_code} not found for subdistrict ${subdistrict.subdistrict_name}`);
      }
    }
    console.log('Subdistricts seeded successfully!');
  } catch (error) {
    console.error('Error seeding subdistricts:', error);
    throw error;
  }
}
module.exports = seedSubdistricts;