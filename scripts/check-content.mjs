// Fails the build if public/esie.js's copy of the services or FAQ ever differs from src/app/esie-content.ts,
// so the words visitors see and the words search engines read can't drift apart.
import fs from "node:fs";

const js = fs.readFileSync("public/esie.js", "utf8");
const ts = fs.readFileSync("src/app/esie-content.ts", "utf8");

// Pull "const <name>=[ ... ]" (JS) or "export const <name>...= [ ... ];" (TS) as a value.
function grab(src, name) {
  const at = src.search(new RegExp(`const ${name}(?::[^=]*)?\\s*=\\s*\\[`));
  if (at < 0) throw new Error(`check-content: can't find ${name}`);
  // skip any TypeScript type (which can contain brackets) to the "=", then take the array after it
  let i = src.indexOf("[", src.indexOf("=", at)), depth = 0, j = i;
  for (; j < src.length; j++) {
    if (src[j] === "[") depth++;
    if (src[j] === "]" && --depth === 0) break;
  }
  return Function(`return ${src.slice(i, j + 1)}`)();
}

const problems = [];
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const jsServices = grab(js, "services").map(({ t, s, l }) => ({ t, s, l }));
if (!same(jsServices, grab(ts, "services"))) problems.push("services differ between public/esie.js and src/app/esie-content.ts");
if (!same(grab(js, "faqs"), grab(ts, "faqs"))) problems.push("FAQ answers differ between public/esie.js and src/app/esie-content.ts");
if (!same(grab(js, "faqTopics"), grab(ts, "faqTopics"))) problems.push("FAQ topics differ between public/esie.js and src/app/esie-content.ts");

if (!same(grab(js, "areas"), grab(ts, "areas"))) problems.push("Explore areas differ between public/esie.js and src/app/esie-content.ts");

if (problems.length) {
  console.error("check-content failed:\n- " + problems.join("\n- "));
  process.exit(1);
}
console.log("check-content: services, FAQ and Explore areas match in both places");
