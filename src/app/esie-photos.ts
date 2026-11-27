// Every photo goes through Next's image optimiser (on Netlify, its image CDN), which sends each browser the
// smallest format it can show (AVIF, then WebP, then the original JPEG) at the photo's full resolution.
// public/esie.js builds the same address for the photos it adds, so keep the two in step.
// Social previews (Open Graph, structured data) keep the plain JPEG: some link previewers can't read AVIF.

/** The optimised address for a photo in public/images, e.g. photo("lion") or photo("/images/lion.jpg"). */
export function photo(nameOrPath: string): string {
  const path = nameOrPath.startsWith("/") ? nameOrPath : `/images/${nameOrPath}.jpg`;
  // 1920 is the smallest allowed width above every photo's own width; the optimiser never enlarges.
  return `/_next/image?url=${encodeURIComponent(path)}&w=1920&q=75`;
}

/** Points every <img src="/images/....jpg"> in a block of page markup at the optimised photo. */
export function withPhotos(html: string): string {
  return html.replace(/src="(\/images\/[\w-]+\.jpg)"/g, (_, path: string) => `src="${photo(path).replace(/&/g, "&amp;")}"`);
}
