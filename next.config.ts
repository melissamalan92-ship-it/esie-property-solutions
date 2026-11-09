import type { NextConfig } from "next";

// GitHub Pages serves static files from /<repo-name>, so that build is exported
// with a base path. Partial prerendering needs a server and can't be exported,
// so it is only enabled for local dev and server-based hosts.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/esie-property-solutions",
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
