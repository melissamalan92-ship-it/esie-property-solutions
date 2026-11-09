# Esie Property Solutions

Skeleton website built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui.

Live at https://esiepropertysolutions.com

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. The home page is in `src/app/page.tsx`.

Add shadcn components with:

```bash
npx shadcn@latest add <component>
```

## Deploy

The site is hosted on Netlify, configured in `netlify.toml`. Pushing to GitHub does not deploy it yet. From a machine logged in to the Netlify account and linked to the project, run:

```bash
netlify deploy --build --prod
```

DNS is managed in Cloudflare. Keep the website's `A` and `www` `CNAME` records set to DNS only.
