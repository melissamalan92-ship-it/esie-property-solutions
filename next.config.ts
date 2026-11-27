import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Photos: AVIF where the browser supports it, then WebP, else the original JPEG (src/app/esie-photos.ts).
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    localPatterns: [{ pathname: "/images/**", search: "" }],
  },
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
