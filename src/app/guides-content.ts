// The guide pages: one page per thing international buyers search for.
// Written only from what ESIE's own site already says (services, FAQ, how it works). Where a guide needs a
// fact ESIE hasn't published yet (fees, partner banks, documents), it stays general; see GUIDES-TODO.md.
// Links inside paragraphs: [words](/path).

export type GuideSection = { h2: string; p?: string[]; ul?: string[]; ol?: string[] };

export type Guide = {
  slug: string;
  /** Short name for the footer and the related-guides list */
  short: string;
  title: string; // under 60 characters
  description: string; // under 155 characters
  h1: [string, string];
  lede: string;
  sections: GuideSection[];
  /** Index of the service in esie-content.ts this guide belongs to, if any */
  service?: number;
};

const help =
  "Email us about your plans and we'll arrange a short introductory call. We'll talk you through the process, then send a clear quote for only the services you need.";

export const guides: Guide[] = [
  {
    slug: "buying-property-in-cape-town-as-a-foreigner",
    short: "Buying as a foreigner",
    title: "Buying Property in Cape Town as a Foreigner: Step by Step",
    description:
      "How international buyers purchase property in Cape Town: the steps from first search to keys, the costs, how long it takes and what can be done remotely.",
    h1: ["Buying in Cape Town", "as a foreigner"],
    lede: "You can buy property in Cape Town while living abroad. This is how it works, step by step, from the first search to the keys.",
    service: 0,
    sections: [
      {
        h2: "Can foreigners buy property in South Africa?",
        p: [
          "Yes. In general, non-residents can buy and own residential property in South Africa, either in their own name or through a structure such as a company or trust. Rules can differ for certain types of land, so we check what applies to the property you are considering.",
        ],
      },
      {
        h2: "The steps, from first search to keys",
        ol: [
          "Plan. Decide what the property is for (a holiday home, an investment or a move) and which areas you are drawn to. Our [guide to the areas](/explore) is a good place to start.",
          "Arrange the money. If you are borrowing, a [non-resident mortgage](/guides/non-resident-mortgages-in-south-africa) usually covers part of the price, with the rest paid from funds brought in from abroad through an authorised dealer, usually a bank.",
          "Find the property. Property sourcing, estate agent introductions, market research and due diligence, so you know what you are buying before you commit.",
          "Choose how you will own it: in your own name, through a company or through a trust. [Each option](/guides/own-name-company-or-trust) has different implications for tax, estate planning and administration.",
          "Make an offer. Contracts are checked before you sign, and the legal requirements are explained in plain terms.",
          "Transfer and registration. A conveyancer handles the transfer and registers the property in the new owner's name at the deeds office.",
          "Owning. Tax, accounting and, one day, taking money out again when you sell. See [tax for foreign owners](/guides/property-tax-for-foreign-owners).",
        ],
      },
      {
        h2: "How long does it take?",
        p: [
          "Once an offer is accepted, transfer and registration commonly take a few months, depending on finance, documentation and the deeds office. We keep you updated at every stage.",
        ],
      },
      {
        h2: "What does it cost besides the price?",
        p: [
          "Typically transfer duty, which is charged on a sliding scale, conveyancing and registration fees, and bond registration costs if you finance the purchase. We outline the expected costs early so there are no surprises.",
        ],
      },
      {
        h2: "Do I need to be in South Africa?",
        p: [
          "Not necessarily. Much of the process can be handled remotely, with documents signed abroad and certified where required. We coordinate each step so you know when, or whether, you need to travel.",
        ],
      },
      {
        h2: "How ESIE helps",
        p: [
          "Buying from abroad means dealing with estate agents, banks, attorneys, conveyancers, tax specialists and currency transfers, often across time zones. ESIE brings trusted, authorised experts together and keeps you updated at every step.",
          help,
        ],
      },
    ],
  },
  {
    slug: "non-resident-mortgages-in-south-africa",
    short: "Non-resident mortgages",
    title: "Non-Resident Mortgages in South Africa | ESIE",
    description:
      "Can you get a South African home loan while living abroad? How non-resident mortgages work, how much banks lend and how to bring in the rest.",
    h1: ["Non-resident mortgages", "in South Africa"],
    lede: "Several South African banks lend to buyers who live abroad. This is what to expect, and how to prepare.",
    service: 1,
    sections: [
      {
        h2: "Can I get a mortgage as a non-resident?",
        p: [
          "Yes. Several South African banks offer home loans to non-residents. Terms vary by bank and by your circumstances, and our financial partners can assess what is realistic for you.",
        ],
      },
      {
        h2: "How much will a bank lend?",
        p: [
          "A non-resident home loan usually covers a portion of the purchase price, with the balance paid from funds brought in from abroad. How much depends on the bank, the property and your own finances, so it is worth knowing early, before you make an offer.",
        ],
      },
      {
        h2: "What a bank will want to see",
        p: [
          "Expect the usual checks for any home loan: who you are, where you live, what you earn and the property you are buying. Because you live abroad, the bank will also look at how the rest of the money will reach South Africa. Our financial partners tell you exactly what their bank asks for, so you can prepare it in one go.",
        ],
      },
      {
        h2: "Bringing in the rest of the money",
        p: [
          "Funds are transferred through an authorised dealer, usually a bank. Keeping the right records when money comes in makes it simpler to take proceeds out again in future. Read more in [moving money to buy in South Africa](/guides/moving-money-to-buy-property-in-south-africa).",
        ],
      },
      {
        h2: "The costs of a loan",
        p: [
          "If you finance the purchase, bond registration costs are added to the transfer duty, conveyancing and registration fees. We outline the expected costs early so there are no surprises.",
        ],
      },
      {
        h2: "How ESIE helps",
        ul: ["Non-resident mortgages", "Home loans", "Banking arrangements"],
        p: [help],
      },
    ],
  },
  {
    slug: "moving-money-to-buy-property-in-south-africa",
    short: "Moving money",
    title: "Moving Money to Buy Property in South Africa | ESIE",
    description:
      "How international buyers bring money into South Africa to buy property, why the records matter, and how to take proceeds out again when you sell.",
    h1: ["Moving money to", "buy in South Africa"],
    lede: "Money for a South African property comes in through an authorised dealer, usually a bank. Doing it properly now makes it simpler to take money out later.",
    service: 4,
    sections: [
      {
        h2: "How the money comes in",
        p: [
          "Funds are transferred through an authorised dealer, usually a bank. South Africa has exchange-control requirements, so the way money arrives matters as much as the amount.",
        ],
      },
      {
        h2: "Why the records matter",
        p: [
          "Keeping the right records when money comes in makes it simpler to take proceeds out again in future, whether that is rent while you own the property or the proceeds when you sell. It is much easier to get this right at the start than to rebuild the paper trail years later.",
        ],
      },
      {
        h2: "Currency exchange",
        p: [
          "Your purchase is in rand, so the exchange rate on the day the money moves affects what the property costs you. Our foreign exchange partners guide you through when and how to transfer.",
        ],
      },
      {
        h2: "Taking money out again",
        p: [
          "Repatriation means taking money back out of South Africa, for example after a sale. With the right records from the start, it follows the same route back through an authorised dealer.",
        ],
      },
      {
        h2: "How ESIE helps",
        ul: ["Currency exchange", "Transfers of funds", "Exchange-control requirements", "Repatriation"],
        p: [help],
      },
    ],
  },
  {
    slug: "own-name-company-or-trust",
    short: "Ownership structures",
    title: "Buy in Your Own Name, a Company or a Trust? | ESIE",
    description:
      "Buying South African property from abroad: owning it personally, through a company or through a trust, and what each means for tax, estates and admin.",
    h1: ["Your own name,", "a company or a trust?"],
    lede: "Non-residents can own South African property in their own name or through a structure such as a company or trust. The right choice depends on your plans.",
    service: 3,
    sections: [
      {
        h2: "The three ways to own",
        ul: [
          "Personal ownership: the property is registered in your own name, or jointly with someone else.",
          "Company or corporate ownership: a company owns the property, and you own the company.",
          "Trust structures: a trust owns the property for its beneficiaries.",
        ],
      },
      {
        h2: "What changes between them",
        p: [
          "Each option has different implications for tax, estate planning and administration: what you pay while you own the property and when you sell, what happens to it when you die, and how much paperwork there is each year. A company or trust, for example, brings its own accounts and statutory returns.",
        ],
      },
      {
        h2: "Questions to answer first",
        ul: [
          "Will you live in it, let it out, or both?",
          "How long do you expect to keep it?",
          "Are you buying alone, with a partner or with family?",
          "Who should it pass to one day?",
          "Where are you tax resident, and might that change?",
        ],
      },
      {
        h2: "How ESIE helps",
        p: [
          "Our specialists help you choose the structure that suits your goals, before you sign, because changing it later is harder. Read more about [tax for foreign owners](/guides/property-tax-for-foreign-owners).",
          help,
        ],
      },
    ],
  },
  {
    slug: "property-tax-for-foreign-owners",
    short: "Tax for foreign owners",
    title: "Property Tax in South Africa for Foreign Owners | ESIE",
    description:
      "The taxes on South African property for owners who live abroad: when you buy, while you own it and let it out, and when you sell.",
    h1: ["Tax on South African", "property, from abroad"],
    lede: "Owning property in South Africa from abroad brings tax at three moments: when you buy, while you own it and when you sell. What applies depends on how you use the property and where you are tax resident.",
    service: 5,
    sections: [
      {
        h2: "When you buy",
        p: [
          "Transfer duty is charged on a sliding scale. Some purchases carry VAT instead, so we check which applies to the property you are buying, and outline the expected costs early.",
        ],
      },
      {
        h2: "While you own it",
        p: [
          "If you let the property, rental income may be taxable in South Africa and possibly in your home country. If you own through a company, dividends tax can apply when the company pays money out.",
        ],
      },
      {
        h2: "When you sell",
        p: [
          "Capital gains when you sell may be taxable in South Africa and possibly in your home country. Keeping records from the day you buy, including how the money came in, makes the sale and [taking the proceeds out](/guides/moving-money-to-buy-property-in-south-africa) simpler.",
        ],
      },
      {
        h2: "Accounts and returns",
        p: [
          "A company or trust that owns property has its own obligations each year: annual financial statements, statutory returns and secretarial declarations. See [your own name, a company or a trust](/guides/own-name-company-or-trust).",
        ],
      },
      {
        h2: "How ESIE helps",
        ul: ["VAT", "Income tax", "Dividends tax", "Capital gains tax", "Transfer duty"],
        p: ["Our tax partners explain what applies to you.", help],
      },
    ],
  },
  {
    slug: "buying-a-holiday-home-in-cape-town",
    short: "Holiday homes",
    title: "Buying a Holiday Home in Cape Town from Abroad | ESIE",
    description:
      "Buying a holiday home in Cape Town while living abroad: where buyers look, buying remotely, letting it out while you're away, and the tax on rent.",
    h1: ["A holiday home", "in Cape Town"],
    lede: "A place to return to, season after season. On the Atlantic Seaboard, in the Southern Suburbs or the Winelands, we help you buy with confidence, from first search to final transfer.",
    sections: [
      {
        h2: "Where holiday buyers look",
        ul: [
          "The Atlantic Seaboard: [Clifton, Camps Bay, Llandudno and Sea Point](/explore), from boulder-lined beaches to walkable seafront apartments.",
          "The Southern Suburbs: Constantia, a green valley of historic wine estates on the far side of Table Mountain.",
          "The Winelands: Stellenbosch, Franschhoek and Paarl, all within about an hour of the city.",
        ],
      },
      {
        h2: "Buying while you live abroad",
        p: [
          "Much of the process can be handled remotely, with documents signed abroad and certified where required. We coordinate each step so you know when, or whether, you need to travel. See the [steps for buying as a foreigner](/guides/buying-property-in-cape-town-as-a-foreigner).",
        ],
      },
      {
        h2: "Letting it out while you're away",
        p: [
          "Many holiday-home owners let their property when they are not using it. Rental income may be taxable in South Africa and possibly in your home country, so it is worth planning before you buy. See [tax for foreign owners](/guides/property-tax-for-foreign-owners).",
        ],
      },
      {
        h2: "Paying for it",
        p: [
          "You can buy with your own funds, or with a [non-resident mortgage](/guides/non-resident-mortgages-in-south-africa) covering part of the price. Either way, the money comes in through an authorised dealer, and keeping the records makes it simpler to take money out later.",
        ],
      },
      {
        h2: "How ESIE helps",
        p: [help],
      },
    ],
  },
];

export const guideBySlug = (slug: string) => {
  const g = guides.find((x) => x.slug === slug);
  if (!g) throw new Error(`No guide called ${slug}`);
  return g;
};
