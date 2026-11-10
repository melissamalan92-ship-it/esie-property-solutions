import type { Metadata } from "next";
import Script from "next/script";
import { esieViews, type EsieView } from "./esie-markup";
import { esieFaqSchema, esieSeo } from "./esie-seo";

export function esieMetadata(view: keyof typeof esieSeo): Metadata {
  const { path, title, description } = esieSeo[view];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ESIE Property Solutions",
      type: "website",
      locale: "en_GB",
      images: [{ url: "/images/wf2.jpg" }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function EsiePage({ view }: { view: EsieView }) {
  return (
    <>
      <div
        style={{ display: "contents" }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: esieViews[view] }}
      />
      {view === "faq" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: esieFaqSchema,
          }}
        />
      )}
      <EsieScript />
    </>
  );
}

/** The site's interaction script (router, curtain, animations). Every page needs it. */
export function EsieScript() {
  return <Script src="/esie.js" strategy="afterInteractive" />;
}
