export const GOLD_RATES = {
  lastUpdated: "Today, 10:00 AM IST",
  trend: "+0.45% (₹32/g up today)",
  rates: {
    "24K": {
      name: "24 Karat (999 Pure Gold)",
      purityPercent: "99.9%",
      pricePerGram: 7250,
      pricePer10Gram: 72500,
      changeToday: "+₹35",
      isPositive: true,
      description: "Standard benchmark for bullion, gold coins and primary investment bars."
    },
    "22K": {
      name: "22 Karat (916 Hallmarked)",
      purityPercent: "91.6%",
      pricePerGram: 6645,
      pricePer10Gram: 66450,
      changeToday: "+₹32",
      isPositive: true,
      description: "Standard standard for traditional Indian handcrafted jewellery & wedding ornaments."
    },
    "18K": {
      name: "18 Karat (750 Gold)",
      purityPercent: "75.0%",
      pricePerGram: 5438,
      pricePer10Gram: 54380,
      changeToday: "+₹26",
      isPositive: true,
      description: "Optimal durability for diamond-studded jewellery, solitaires, and contemporary daily wear."
    },
    "Silver": {
      name: "Fine Silver (999 Sterling)",
      purityPercent: "99.9%",
      pricePerGram: 88.5,
      pricePer10Gram: 885,
      changeToday: "+₹0.60",
      isPositive: true,
      description: "Pure silver rate for ornaments, silverware and auspicious pooja artifacts."
    }
  },
  cities: [
    { name: "Mumbai", rate24K: 7250, rate22K: 6645, rate18K: 5438 },
    { name: "New Delhi", rate24K: 7265, rate22K: 6660, rate18K: 5450 },
    { name: "Bengaluru", rate24K: 7255, rate22K: 6650, rate18K: 5442 },
    { name: "Hyderabad", rate24K: 7250, rate22K: 6645, rate18K: 5438 },
    { name: "Chennai", rate24K: 7280, rate22K: 6675, rate18K: 5462 },
    { name: "Kolkata", rate24K: 7250, rate22K: 6645, rate18K: 5438 },
    { name: "Ahmedabad", rate24K: 7258, rate22K: 6653, rate18K: 5444 }
  ],
  history7Days: [
    { day: "Thu (Today)", rate22K: 6645, rate24K: 7250 },
    { day: "Wed", rate22K: 6613, rate24K: 7215 },
    { day: "Tue", rate22K: 6620, rate24K: 7222 },
    { day: "Mon", rate22K: 6595, rate24K: 7195 },
    { day: "Sun", rate22K: 6580, rate24K: 7180 },
    { day: "Sat", rate22K: 6580, rate24K: 7180 },
    { day: "Fri", rate22K: 6565, rate24K: 7160 }
  ]
};
