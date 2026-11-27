// The words public/esie.js needs to build the home page's services and FAQ, the FAQ tabs and the Explore map,
// handed over as data on every page so there is only one copy of them (src/app/esie-content.ts).
// Search engines read the visible versions the server already puts in the pages; this block is for the script.
import { areas, faqs, faqTopics, services } from "./esie-content";

export function EsieData() {
  return (
    <script
      type="application/json"
      id="esie-data"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ services, faqs, faqTopics, areas }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
