import { faqs } from "./esie-content";

// Search titles, descriptions and paths for each page.
export const esieSeo = {
  "home": {
    "path": "/",
    "title": "Buying Property in Cape Town from Abroad | ESIE Property Solutions",
    "description": "Buying property in Cape Town from abroad? ESIE guides international buyers through the legal, tax, finance and property steps, from start to finish."
  },
  "about": {
    "path": "/about",
    "title": "About ESIE | Helping International Buyers Purchase in Cape Town",
    "description": "ESIE Property Solutions is a Cape Town service built for people buying South African property from abroad, coordinating every part of the purchase."
  },
  "services": {
    "path": "/services",
    "title": "Services for International Property Buyers in South Africa | ESIE",
    "description": "Finding the right home, non-resident finance, legal and transfer support, ownership structures, repatriation of funds, tax and accounting: choose only the support you need."
  },
  "explore": {
    "path": "/explore",
    "title": "Where to Buy Property in Cape Town: Areas to Explore | ESIE",
    "description": "Explore Cape Town’s neighbourhoods and lifestyles, from the Atlantic Seaboard to the Winelands, with guidance for buyers purchasing from abroad."
  },
  "faq": {
    "path": "/faq",
    "title": "Buying Property in South Africa as a Foreigner: FAQs | ESIE",
    "description": "Answers for international buyers on purchasing property in South Africa, including the buying process, moving money, tax and ownership."
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
