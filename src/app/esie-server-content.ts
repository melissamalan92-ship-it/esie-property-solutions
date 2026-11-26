// Fills the Services and FAQ pages with every service and every answer on the server, so search engines and
// AI tools read all of it without running the page's script. The markup matches what public/esie.js used to
// build after loading, so the pages look the same; the script now only shows and hides what's already there.
import { areas, faqs, faqTopics, serviceOrder, services } from "./esie-content";
import { guides } from "./guides-content";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function guideLink(service: number): string {
  const g = guides.find((x) => x.service === service);
  return g ? `<a href="/guides/${g.slug}" class="link-line">Read the guide <span class="ar">→</span></a>` : "";
}

/** The six area write-ups on the Explore page, in the layout esie.js used to build (classes chap, cgrid, facts). */
function areaChapters(): string {
  const img = (k: string) => `/images/${k}.jpg`;
  return areas
    .map(
      (a, i) => `<article class="chap${i % 2 ? " rev" : ""}"><div class="wrap cgrid">
 <div class="big"><div class="frame" data-par="0.07"><img src="${img(a.img)}" alt="${esc(a.name)}, ${esc(a.region)}" loading="lazy"></div></div>
 <div class="small"><div class="frame" data-par="0.12"><img src="${img(a.img2)}" alt="Another view of ${esc(a.name)}" loading="lazy"></div></div>
 <div class="ctext"><div class="ttl"><div class="meta"><b>${esc(a.region)}</b><span class="tab">${esc(a.coord)}</span></div><h2>${esc(a.name)}</h2></div>
 <div class="body">${a.p.map((x) => `<p>${esc(x)}</p>`).join("")}<dl class="facts three">${a.f
   .filter((x) => x[0] !== "Homes")
   .map((x) => `<div><dt>${esc(x[0])}</dt><dd>${esc(x[1])}</dd></div>`)
   .join("")}</dl></div></div>
</div></article>`,
    )
    .join("");
}

function serviceCards(): string {
  return serviceOrder
    .map((i, k) => {
      const v = services[i];
      return `<div class="pk-in" data-i="${i}"${k === 0 ? "" : " hidden"}><h3>${esc(v.t)}</h3><p>${esc(v.s)}</p><ul>${v.l
        .map((x) => `<li>${esc(x)}</li>`)
        .join("")}</ul>${guideLink(i)}</div>`;
    })
    .join("");
}

function faqItems(): string {
  return faqTopics
    .map(([, ks], t) =>
      ks
        .map((k, n) => {
          const first = t === 0 && n === 0;
          return `<li data-k="${k}" data-t="${t}"${first ? ' class="open"' : ""}${t === 0 ? "" : " hidden"}><button type="button" data-k="${k}" aria-current="${first}"><span class="n">0${n + 1}</span><span>${esc(faqs[k][0])}</span><span class="ar" aria-hidden="true">→</span></button><div class="inl"><div><p>${esc(faqs[k][1])}</p></div></div></li>`;
        })
        .join(""),
    )
    .join("");
}

function replaceOnce(html: string, re: RegExp, by: string, what: string): string {
  if (!re.test(html)) throw new Error(`esie-server-content: couldn't find ${what} in the page markup`);
  return html.replace(re, by);
}

export function withServerContent(view: string, html: string): string {
  if (view === "services") {
    return replaceOnce(
      html,
      /<div class="pk-in" id="pkCard">[\s\S]*?<\/ul><\/div>/,
      `<div id="pkCard">${serviceCards()}</div>`,
      "the services card",
    );
  }
  if (view === "explore") {
    return replaceOnce(
      html,
      /(<section class="cta-band" style="background:var\(--cream\)">\s*<div class="wrap"><h2>Found the place)/,
      `<section class="chapters" aria-label="Areas"><div id="chapters">${areaChapters()}</div></section>\n  $1`,
      "the Explore page's closing band",
    );
  }
  if (view === "faq") {
    return replaceOnce(
      html,
      /<ol class="fq-list" id="fqList">[\s\S]*?<\/ol>/,
      `<ol class="fq-list" id="fqList">${faqItems()}</ol>`,
      "the FAQ list",
    );
  }
  return html;
}
