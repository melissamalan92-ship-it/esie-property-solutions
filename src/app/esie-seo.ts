import { faqs } from "./esie-content";

// Search titles, descriptions and paths for each page.
export const esieSeo = {
  "home": {
    "path": "/",
    "title": "Buy Property in Cape Town from Abroad | ESIE",
    "description": "Buying in Cape Town from abroad? ESIE coordinates the agent, bank, attorney, tax and money transfers for international buyers, from first call to keys."
  },
  "about": {
    "path": "/about",
    "title": "About ESIE | Cape Town Property Help for Buyers Abroad",
    "description": "ESIE is a Cape Town service for people buying South African property from abroad, coordinating the agent, bank, attorney and tax for you."
  },
  "services": {
    "path": "/services",
    "title": "Services for Foreign Property Buyers in Cape Town | ESIE",
    "description": "Property search, non-resident mortgages, ownership structures, legal and transfer, moving money, tax and accounting. Choose only what you need."
  },
  "explore": {
    "path": "/explore",
    "title": "Where to Buy Property in Cape Town: 19 Areas | ESIE",
    "description": "From Sea Point and Camps Bay to Stellenbosch and Hermanus: 19 places international buyers look at in Cape Town and the Winelands."
  },
  "faq": {
    "path": "/faq",
    "title": "Buying Property in South Africa as a Foreigner: FAQs",
    "description": "Can foreigners buy in South Africa? Mortgages, buying remotely, costs, moving money and tax: straight answers for international buyers."
  },
  "contact": {
    "path": "/contact",
    "title": "Contact ESIE | Request a Call About Buying in Cape Town",
    "description": "Tell us what you are looking for and we will arrange an introductory call about buying property in Cape Town from abroad."
  },
  "privacy": {
    "path": "/privacy",
    "title": "Privacy Policy | ESIE Property Solutions",
    "description": "How ESIE Property Solutions collects, uses and protects your personal information, under POPIA and the UK and EU GDPR."
  }
};
/** The FAQ's search-engine data, built from the same answers visitors read (esie-content.ts). */
export const esieFaqSchema = faqs.map(([q, a]) => ({
  "@type": "Question",
  name: q,
  acceptedAnswer: { "@type": "Answer", text: a },
}));
