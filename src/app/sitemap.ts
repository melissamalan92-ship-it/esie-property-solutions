import type { MetadataRoute } from "next";
import { esieSeo } from "./esie-seo";
import { guides } from "./guides-content";

const site = "https://esiepropertysolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.values(esieSeo).map(({ path }) => ({
      url: path === "/" ? site : `${site}${path}`,
    })),
    { url: `${site}/guides` },
    ...guides.map((g) => ({ url: `${site}/guides/${g.slug}` })),
  ];
}
