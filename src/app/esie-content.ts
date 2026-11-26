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
