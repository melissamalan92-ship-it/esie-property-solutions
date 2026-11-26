// The words for the Services and FAQ pages, in one place.
// The server puts all of it into each page, so search engines and AI tools can read every service and every answer;
// public/esie.js only shows and hides it. public/esie.js still keeps its own copy for the home page:
// scripts/check-content.mjs fails the build if the two ever differ.

export type Service = { t: string; s: string; l: string[] };

export const services: Service[] = [
  {
    "t": "Property Acquisition & Advisory",
    "s": "Property sourcing, estate agent introductions, market research, due diligence and purchase coordination.",
    "l": [
      "Property sourcing",
      "Estate agent introductions",
      "Market research",
      "Due diligence",
      "Purchase coordination"
    ]
  },
  {
    "t": "Finance & Mortgage Advisory",
    "s": "Non-resident mortgages, home loans and banking arrangements.",
    "l": [
      "Non-resident mortgages",
      "Home loans",
      "Banking arrangements"
    ]
  },
  {
    "t": "Legal, Transfer & Registration",
    "s": "Assistance with contracts and legal requirements, introductions to conveyancers, and the transfer and registration of your property.",
    "l": [
      "Assistance with contracts",
      "Introduction to conveyancers",
      "Assistance with legal requirements",
      "Ownership transfer",
      "Documentation",
      "Registration"
    ]
  },
  {
    "t": "Corporate & Ownership Structuring",
    "s": "Specialist guidance on personal, company or corporate, and trust ownership structures.",
    "l": [
      "Personal ownership",
      "Company or corporate ownership",
      "Trust structures"
    ]
  },
  {
    "t": "Repatriation of Funds",
    "s": "Currency exchange, transfers of funds, exchange-control requirements and repatriation.",
    "l": [
      "Currency exchange",
      "Transfers of funds",
      "Exchange-control requirements",
      "Repatriation"
    ]
  },
  {
    "t": "Tax Advisory & Compliance",
    "s": "VAT, income tax, dividends tax, capital gains tax and transfer duty.",
    "l": [
      "VAT",
      "Income tax",
      "Dividends tax",
      "Capital gains tax",
      "Transfer duty"
    ]
  },
  {
    "t": "Accounting & Financial Reporting",
    "s": "Annual financial statements, secretarial declarations, statutory returns, bookkeeping and reporting.",
    "l": [
      "Annual financial statements",
      "Secretarial declarations",
      "Statutory returns",
      "Bookkeeping",
      "Reporting"
    ]
  }
];

/** The order the Services page lists them in (indexes into services), and the short tab labels. */
export const serviceOrder = [0, 1, 3, 2, 4, 5, 6];
export const serviceShort = ["Finding the property", "Finance & mortgages", "Legal & transfer", "Ownership structure", "Repatriation of funds", "Tax", "Accounting"];

/** [question, answer] */
export const faqs: [string, string][] = [
  [
    "Can foreigners buy property in South Africa?",
    "Yes. In general, non-residents can buy and own residential property in South Africa, either in their own name or through a structure such as a company or trust. Rules can differ for certain types of land, so we check what applies to the property you are considering."
  ],
  [
    "Can I get a mortgage as a non-resident?",
    "Several South African banks offer home loans to non-residents, usually covering a portion of the purchase price, with the balance paid from funds brought in from abroad. Terms vary by bank and by your circumstances, and our financial partners can assess what is realistic for you."
  ],
  [
    "Do I need to be in South Africa to buy?",
    "Not necessarily. Much of the process can be handled remotely, with documents signed abroad and certified where required. We coordinate each step so you know when, or whether, you need to travel."
  ],
  [
    "What does ESIE charge?",
    "After the introductory call we send a personalised quote based only on the services you need, with a clear and transparent scope."
  ],
  [
    "What costs are there besides the purchase price?",
    "Typically transfer duty, which is charged on a sliding scale, conveyancing and registration fees, and bond registration costs if you finance the purchase. We outline the expected costs early so there are no surprises."
  ],
  [
    "How do I bring money into South Africa?",
    "Funds are transferred through an authorised dealer, usually a bank. Keeping the right records when money comes in makes it simpler to take proceeds out again in future. Our foreign exchange partners guide you through it."
  ],
  [
    "What tax will I pay as an owner?",
    "It depends on how you use the property and where you are tax resident. Rental income, and capital gains when you sell, may be taxable in South Africa and possibly in your home country. Our tax partners explain what applies to you."
  ],
  [
    "Should I buy in my own name, a company or a trust?",
    "Each option has different implications for tax, estate planning and administration. Our specialists help you choose the structure that suits your goals."
  ],
  [
    "How long does the process take?",
    "Once an offer is accepted, transfer and registration commonly take a few months, depending on finance, documentation and the deeds office. We keep you updated at every stage."
  ]
];

/** [topic name, indexes into faqs] */
export const faqTopics: [string, number[]][] = [["Buying",[0,2,8]],["Money",[1,4,5]],["Tax & ownership",[6,7]],["Working with ESIE",[3]]];

export type Area = { name: string; region: string; coord: string; img: string; img2: string; p: string[]; f: [string, string][] };

/** Six areas international buyers ask about, shown on the Explore page (images are /images/<img>.jpg). */
export const areas: Area[] = [
  {
    "name": "Clifton",
    "region": "Atlantic Seaboard",
    "coord": "33.94° S · 18.38° E",
    "img": "pan2",
    "img2": "bay",
    "p": [
      "Clifton is a string of four small beaches, separated by granite boulders and reached by stairways from the road above. Homes step down the slope, many with uninterrupted views over the Atlantic.",
      "The beaches are sheltered from the summer south-easter, making them some of the calmest on the coast. It is one of Cape Town’s most sought-after addresses, minutes from the city."
    ],
    "f": [
      [
        "Setting",
        "Clifftop & beachfront"
      ],
      [
        "Homes",
        "Villas, bungalows, apartments"
      ],
      [
        "Feel",
        "Private, sheltered, exclusive"
      ],
      [
        "Known for",
        "Four boulder-lined beaches"
      ]
    ]
  },
  {
    "name": "Camps Bay",
    "region": "Atlantic Seaboard",
    "coord": "33.95° S · 18.38° E",
    "img": "yellow",
    "img2": "veranda",
    "p": [
      "Camps Bay is a wide, palm-lined beach set beneath the Twelve Apostles. Along the beachfront, Victoria Road is lined with restaurants, cafés and bars that stay busy throughout the summer season.",
      "Homes range from contemporary villas on the mountain slopes to lock-up-and-go apartments near the sand. It has long been a favourite with international buyers looking for a holiday home."
    ],
    "f": [
      [
        "Setting",
        "Beach & mountain slopes"
      ],
      [
        "Homes",
        "Villas and apartments"
      ],
      [
        "Feel",
        "Lively, social, glamorous"
      ],
      [
        "Known for",
        "Twelve Apostles views"
      ]
    ]
  },
  {
    "name": "Llandudno",
    "region": "Atlantic Seaboard",
    "coord": "34.01° S · 18.34° E",
    "img": "livingsea",
    "img2": "bakoven",
    "p": [
      "Llandudno is a small cove between Camps Bay and Hout Bay, tucked below the mountain along the coastal road. There are no shops or commercial buildings, only homes set among the fynbos above a sandy beach and its rounded boulders.",
      "It is quiet, residential and close-knit, known for its sunsets and its surf. Buyers come here for privacy and nature while staying within easy reach of the city."
    ],
    "f": [
      [
        "Setting",
        "Secluded cove"
      ],
      [
        "Homes",
        "Freestanding family homes"
      ],
      [
        "Feel",
        "Quiet, natural, private"
      ],
      [
        "Known for",
        "Sunsets and surf"
      ]
    ]
  },
  {
    "name": "Sea Point",
    "region": "Atlantic Seaboard",
    "coord": "33.92° S · 18.39° E",
    "img": "oceanroom",
    "img2": "fresnaye",
    "p": [
      "Sea Point is the Atlantic Seaboard’s most urban neighbourhood, with apartment buildings facing the ocean and the long Sea Point Promenade along the shoreline, beneath Lion’s Head and Signal Hill.",
      "Restaurants, cafés and shops are all within walking distance, and the city centre and V&A Waterfront are a short drive away. It suits buyers who want an easy, walkable lock-up-and-go base."
    ],
    "f": [
      [
        "Setting",
        "Urban seafront"
      ],
      [
        "Homes",
        "Apartments and penthouses"
      ],
      [
        "Feel",
        "Walkable, vibrant, convenient"
      ],
      [
        "Known for",
        "The Promenade"
      ]
    ]
  },
  {
    "name": "Constantia",
    "region": "Southern Suburbs",
    "coord": "34.02° S · 18.45° E",
    "img": "interior",
    "img2": "bedroom",
    "p": [
      "Constantia is a green valley on the far side of Table Mountain and home to the oldest wine-producing region in South Africa. Historic wine estates, oak-lined roads and greenbelts give it a gentle, countryside feel.",
      "Properties are typically larger, with generous gardens, and the area is popular with families for its schools. It offers space and calm while remaining close to the city and the beaches."
    ],
    "f": [
      [
        "Setting",
        "Valley, vineyards, greenbelts"
      ],
      [
        "Homes",
        "Large homes, spacious plots"
      ],
      [
        "Feel",
        "Leafy, peaceful, family-friendly"
      ],
      [
        "Known for",
        "Historic wine estates"
      ]
    ]
  },
  {
    "name": "The Winelands",
    "region": "Winelands",
    "coord": "33.93° S · 18.86° E",
    "img": "estate",
    "img2": "capedutch",
    "p": [
      "East of Cape Town, the Winelands stretch across Stellenbosch, Franschhoek and Paarl, all within about an hour of the city. Mountain valleys are planted with vines, and historic estates sit alongside some of the country’s best-known restaurants.",
      "Stellenbosch is a lively university town, Franschhoek is known for its food, and the surrounding farms and secure estates offer a slower pace of life with plenty of space."
    ],
    "f": [
      [
        "Setting",
        "Mountain valleys & vineyards"
      ],
      [
        "Homes",
        "Estates, farms, village homes"
      ],
      [
        "Feel",
        "Slow, scenic, gastronomic"
      ],
      [
        "Known for",
        "Wine and world-class food"
      ]
    ]
  }
];
