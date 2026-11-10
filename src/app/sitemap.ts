import type { MetadataRoute } from "next";
import { esieSeo } from "./esie-seo";

const site = "https://esiepropertysolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(esieSeo).map(({ path }) => ({
    url: path === "/" ? site : `${site}${path}`,
  }));
}
