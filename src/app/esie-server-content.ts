// Fills the Services and FAQ pages with every service and every answer on the server, so search engines and
// AI tools read all of it without running the page's script. The markup matches what public/esie.js used to
// build after loading, so the pages look the same; the script now only shows and hides what's already there.
import { faqs, faqTopics, serviceOrder, services } from "./esie-content";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function serviceCards(): string {
  return serviceOrder
    .map((i, k) => {
      const v = services[i];
      return `<div class="pk-in" data-i="${i}"${k === 0 ? "" : " hidden"}><h3>${esc(v.t)}</h3><p>${esc(v.s)}</p><ul>${v.l
        .map((x) => `<li>${esc(x)}</li>`)
        .join("")}</ul></div>`;
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
