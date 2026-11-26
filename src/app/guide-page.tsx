import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { EsieScript } from "./esie-page";
import { guideBySlug, guides, type Guide } from "./guides-content";

const site = "https://esiepropertysolutions.com";

export function guideMetadata(slug: string): Metadata {
  const g = guideBySlug(slug);
  const path = `/guides/${g.slug}`;
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: path },
    openGraph: {
      title: g.title,
      description: g.description,
      url: path,
      siteName: "ESIE Property Solutions",
      type: "article",
      locale: "en_GB",
      images: [{ url: "/images/wf2.jpg" }],
    },
    twitter: { card: "summary_large_image", title: g.title, description: g.description },
  };
}

/** Turns [words](/path) inside a sentence into links; everything else stays text. */
function Text({ children }: { children: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  for (const m of children.matchAll(re)) {
    parts.push(children.slice(last, m.index));
    parts.push(
      <a key={m.index} href={m[2]} className="gd-link">
        {m[1]}
      </a>,
    );
    last = (m.index ?? 0) + m[0].length;
  }
  parts.push(children.slice(last));
  return <>{parts}</>;
}

const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

function schema(g: Guide) {
  const url = `${site}/guides/${g.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title.replace(/ \| ESIE$/, ""),
      description: g.description,
      url,
      mainEntityOfPage: url,
      inLanguage: "en",
      image: `${site}/images/wf2.jpg`,
      author: { "@id": `${site}/#business` },
      publisher: { "@id": `${site}/#business` },
      about: g.sections.map((s) => s.h2),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${site}/guides` },
        { "@type": "ListItem", position: 3, name: g.short, item: url },
      ],
    },
  ];
}

export function GuidePage({ slug }: { slug: string }) {
  const g = guideBySlug(slug);
  const others = guides.filter((x) => x.slug !== g.slug);
  return (
    <>
      <section className="view active" data-view={`guides/${g.slug}`}>
        <div className="ph">
          <div className="wrap head">
            <div>
              <p className="crumbs">
                <a href="/guides">Guides</a>
                <b>{g.short}</b>
              </p>
              <h1>
                <span className="ln">
                  <span>{g.h1[0]}</span>
                </span>{" "}
                <span className="ln">
                  <span>{g.h1[1]}</span>
                </span>
              </h1>
            </div>
            <p className="lede">{g.lede}</p>
          </div>
        </div>
        <section className="sec pv gd" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="pv-body">
              {g.sections.map((s) => (
                <Fragment key={s.h2}>
                  <h2>{s.h2}</h2>
                  {s.ul && (
                    <ul>
                      {s.ul.map((x) => (
                        <li key={x}>
                          <Text>{x}</Text>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.ol && (
                    <ol>
                      {s.ol.map((x) => (
                        <li key={x}>
                          <Text>{x}</Text>
                        </li>
                      ))}
                    </ol>
                  )}
                  {s.p?.map((x) => (
                    <p key={x}>
                      <Text>{x}</Text>
                    </p>
                  ))}
                </Fragment>
              ))}
              <p className="fine gd-fine">
                This page gives general information only and is not legal, tax or financial advice. Your situation will
                be assessed by appropriately authorised professionals.
              </p>
            </div>
            <div className="gd-more">
              <p className="eyebrow">More guides for international buyers</p>
              <ul>
                {others.map((o) => (
                  <li key={o.slug}>
                    <a href={`/guides/${o.slug}`} className="link-line">
                      {o.short} <span className="ar">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="wrap">
            <h2>Ready for the first step?</h2>
            <p className="dim">Send us a short email about your plans and we&apos;ll take it from there.</p>
            <a href="/contact" className="btn fill">
              Request a call <span className="ar">→</span>
            </a>
          </div>
        </section>
      </section>
      {schema(g).map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
      <EsieScript />
    </>
  );
}

/** The /guides page: every guide, with its opening line. */
export function GuidesIndex() {
  return (
    <>
      <section className="view active" data-view="guides">
        <div className="ph">
          <div className="wrap head">
            <div>
              <h1>
                <span className="ln">
                  <span>Guides for</span>
                </span>{" "}
                <span className="ln">
                  <span>international buyers</span>
                </span>
              </h1>
            </div>
            <p className="lede">
              Plain answers on buying property in Cape Town from abroad: the steps, the money, ownership and tax.
            </p>
          </div>
        </div>
        <section className="sec pv gd" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="pv-body gd-list">
              {guides.map((g) => (
                <Fragment key={g.slug}>
                  <h2>
                    <a href={`/guides/${g.slug}`} className="gd-link">
                      {plain(g.title.replace(/ \| ESIE$/, ""))}
                    </a>
                  </h2>
                  <p>{g.lede}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </section>
      <EsieScript />
    </>
  );
}
