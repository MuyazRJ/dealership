/* ═══ FF MOTORHOUSE STOCK — the only file you edit to add/remove cars ═══

   ADD A CAR     Copy any block below, paste it at the TOP of the list, change the details, save.
                 The stock page, homepage card and its own car page all appear automatically.
   REMOVE A CAR  Delete its block.
   PHOTOS        Put them in /images/ and list them in `images` (first one is the card photo).

   Required : year, make, model, trim, price, mileage, fuel, gearbox, images
   Optional : featured:true      show on the homepage
              flag:"Just arrived" badge on the photo
              autotrader:"url"   adds a "View on Auto Trader" link
              description:"..."  paragraph(s) on the car page ("About this car")
                                 use \n\n between paragraphs for a new paragraph
              features:["...","..."]   bullet list on the car page
              specs:{ Colour:"Blue", Owners:"2" }   extra rows in the spec table
                                 (a known Colour name like Blue/Silver/Black also gets a colour swatch;
                                 Owners:"1" shows as "1 owner")
              slug:"..."         only if two cars would have the same name
*/
window.CARS = [
  {
    year: 2014, make: "Peugeot", model: "108",
    trim: "1.2 VTi PureTech Allure Top! Euro 5 5dr",
    price: 3495, mileage: 78418, fuel: "Petrol", gearbox: "Manual",
    images: ["images/car-0.jpg","images/car-0-1.jpg","images/car-0-2.jpg"],
    featured: true,
    flag: "Just arrived",
    autotrader: "https://www.autotrader.co.uk/car-details/202610076748720",
    description: "A 2014 Peugeot 108 in Allure Top! trim, powered by the 1.2 VTi PureTech petrol engine and paired with a manual gearbox. Small, light and easy to park, it's a sensible choice for town driving, short commutes and first-time owners.\n\nLike every car we sell, it's HPI checked, serviced and MOT'd before sale, and comes with 6 months' Nationwide warranty and no admin fees.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "", "Engine size": "1.2L", Doors: "5", Emissions: "Euro 5" },
    features: [
      "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
  {
    year: 2010, make: "Mercedes-Benz", model: "C Class",
    trim: "1.8 C250 BlueEfficiency Sport Auto Euro 5 4dr",
    price: 3995, mileage: 73300, fuel: "Petrol", gearbox: "Automatic",
    images: ["images/car-1.jpg"],
    featured: false,
    autotrader: "https://www.autotrader.co.uk/car-details/202609065776172",
    description: "A 2010 Mercedes-Benz C Class C250 BlueEfficiency in Sport trim. It pairs a 1.8 petrol engine with an automatic gearbox in a four-door saloon body, for relaxed, easy driving whether you're in town traffic or on a longer run.\n\nIt's HPI checked, serviced and MOT'd before sale, with 6 months' Nationwide warranty and no admin fees, so the price you see is the price you pay.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "", "Engine size": "1.8L", Doors: "4", Emissions: "Euro 5" },
    features: [
      // "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
  {
    year: 2015, make: "SEAT", model: "Ibiza",
    trim: "1.2 TSI FR Euro 5 5dr",
    price: 4495, mileage: 78328, fuel: "Petrol", gearbox: "Manual",
    images: ["images/car-2.jpg"],
    featured: true,
    autotrader: "https://www.autotrader.co.uk/car-details/202610076749411",
    description: "A 2015 SEAT Ibiza in sporty FR trim, with the 1.2 TSI petrol engine and a manual gearbox. A practical five-door supermini that's compact enough for the school run or the city, with a bit of extra character from the FR styling.\n\nIt comes HPI checked, serviced and MOT'd before sale, backed by 6 months' Nationwide warranty and no admin fees.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "", "Engine size": "1.2L", Doors: "5", Emissions: "Euro 5" },
    features: [
      // "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
  {
    year: 2016, make: "Ford", model: "Focus",
    trim: "1.0T EcoBoost Titanium Euro 6 (s/s) 5dr",
    price: 4749, mileage: 64500, fuel: "Petrol", gearbox: "Manual",
    images: ["images/car-3.jpg"],
    featured: true,
    autotrader: "https://www.autotrader.co.uk/car-details/202609065776130",
    description: "A 2016 Ford Focus in Titanium trim, fitted with the 1.0 EcoBoost turbo petrol engine, stop-start and a manual gearbox. It's a Euro 6 five-door hatchback, well suited to everyday driving and family use.\n\nIt's HPI checked, serviced and MOT'd before sale, with 6 months' Nationwide warranty and no admin fees.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "", "Engine size": "1.0L", Doors: "5", Emissions: "Euro 6" },
    features: [
      // "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
  {
    year: 2019, make: "Toyota", model: "AYGO",
    trim: "1.0 VVT-i x-press Euro 6 5dr",
    price: 7495, mileage: 54661, fuel: "Petrol", gearbox: "Manual",
    images: ["images/car-5.jpg"],
    featured: true,
    autotrader: "https://www.autotrader.co.uk/car-details/202610076749005",
    description: "A 2019 Toyota AYGO x-press with the 1.0 VVT-i petrol engine and a manual gearbox. A Euro 6 five-door city car that's easy to drive and park, and a good fit if you want something simple and dependable for everyday journeys.\n\nIt's HPI checked, serviced and MOT'd before sale, with 6 months' Nationwide warranty and no admin fees.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "", "Engine size": "1.0L", Doors: "5", Emissions: "Euro 6" },
    features: [
      // "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
  {
    year: 2019, make: "Audi", model: "A6 Avant",
    trim: "2.0 320d M Sport Auto xDrive Euro 5 (s/s) 4dr",
    price: 21249, mileage: 39548, fuel: "Diesel", gearbox: "Automatic",
    images: ["images/car-6.jpg"],
    featured: true,
    autotrader: "https://www.autotrader.co.uk/car-details/202609115966261",
    description: "A 2019 Audi A6 Avant with a diesel engine and an automatic gearbox. The Avant estate body gives you plenty of space for passengers and luggage, and the refined, comfortable drive makes it a natural choice for longer journeys.\n\nIt's HPI checked, serviced and MOT'd before sale, with 6 months' Nationwide warranty and no admin fees.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "" },
    features: [
      // "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
  {
    year: 2018, make: "BMW", model: "1 Series",
    trim: "3.0 M140i Shadow Edition Auto Euro 6 (s/s) 3dr",
    price: 17749, mileage: 77500, fuel: "Petrol", gearbox: "Automatic",
    images: ["images/car-7.jpg"],
    featured: true,
    autotrader: "https://www.autotrader.co.uk/car-details/202607294627719",
    description: "A 2018 BMW M140i in Shadow Edition trim, the performance-focused 1 Series. It has a 3.0-litre petrol engine, an automatic gearbox and a three-door body, for a quick, engaging drive that's still easy to live with day to day.\n\nIt's HPI checked, serviced and MOT'd before sale, with 6 months' Nationwide warranty and no admin fees.",
    // Fill in: Colour and Owners stay hidden on the page until they have a value.
    specs: { Colour: "", Owners: "", "Engine size": "3.0L", Doors: "3", Emissions: "Euro 6" },
    features: [
      // "Bluetooth", "Parking sensors", "Alloy wheels",
    ],
  },
];
