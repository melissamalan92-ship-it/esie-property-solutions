# Esie Property Solutions

Skeleton website built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui.

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

Every push to `main` builds a static export and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.

GitHub Pages only hosts static files, so server features such as API routes and server actions won't work there.
