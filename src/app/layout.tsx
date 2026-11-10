import type { Metadata, Viewport } from "next";
import {
  Curtain,
  FloatingActions,
  Footer,
  Header,
} from "@/components/site-shell";
import "./esie.css";

const description =
  "ESIE Property Solutions in Cape Town helps international buyers purchase property in South Africa, coordinating property, financial, legal and tax services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://esiepropertysolutions.com"),
  title: "ESIE Property Solutions",
  description,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ESIE Property Solutions",
  url: "https://esiepropertysolutions.com",
  image: "https://esiepropertysolutions.com/images/wf2.jpg",
  description,
  areaServed: { "@type": "City", name: "Cape Town" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Keeps the page curtain down while a page loads after a curtain transition. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('esie-curtain')){sessionStorage.removeItem('esie-curtain');document.documentElement.classList.add('curtain-cover')}}catch(e){}",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600&family=Urbanist:wght@200;300;400;500&display=swap"
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
      </body>
    </html>
  );
}
