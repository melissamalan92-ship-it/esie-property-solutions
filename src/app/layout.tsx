import type { Metadata, Viewport } from "next";
import {
  Curtain,
  FloatingActions,
  Footer,
  Header,
} from "@/components/site-shell";
import { Hanken_Grotesk, Urbanist } from "next/font/google";
import "./esie.css";
import { services } from "./esie-content";
import { EsieData } from "./esie-data";

// Fonts are downloaded at build time and served from the site itself: faster, and visitors' browsers never contact Google.
const urbanist = Urbanist({ subsets: ["latin"], weight: ["200", "300", "400", "500"], variable: "--font-urbanist", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-hanken", display: "swap" });

const description =
  "ESIE Property Solutions in Cape Town helps international buyers purchase property in South Africa, coordinating property, financial, legal and tax services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://esiepropertysolutions.com"),
  title: "ESIE Property Solutions",
  description,
};

// What search engines and AI tools are told about the business. Only facts shown on the site itself;
// add telephone, address, founder and sameAs (LinkedIn, Google profile) once ESIE confirms them.
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://esiepropertysolutions.com/#business",
  name: "ESIE Property Solutions",
  alternateName: "ESIE",
  url: "https://esiepropertysolutions.com",
  image: "https://esiepropertysolutions.com/images/wf2.jpg",
  email: "info@esiepropertysolutions.com",
  description,
  slogan: "Buying in Cape Town, made easy",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "City", name: "Cape Town" },
    { "@type": "AdministrativeArea", name: "Western Cape" },
  ],
  audience: { "@type": "Audience", audienceType: "International and non-resident property buyers" },
  knowsAbout: [
    "Buying property in South Africa as a foreigner",
    "Non-resident mortgages",
    "Property ownership structures (personal, company and trust)",
    "Conveyancing and property transfer",
    "Exchange control and repatriation of funds",
    "Property tax for non-residents",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services for international property buyers",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.t, description: s.s },
    })),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${urbanist.variable} ${hanken.variable}`} suppressHydrationWarning>
      <head>
        {/* Keeps the page curtain down while a page loads after a curtain transition. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('esie-curtain')){sessionStorage.removeItem('esie-curtain');document.documentElement.classList.add('curtain-cover')}}catch(e){}",
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <FloatingActions />
        <Curtain />
        <Header />
        <main>{children}</main>
        <Footer />
        <EsieData />
      </body>
    </html>
  );
}
