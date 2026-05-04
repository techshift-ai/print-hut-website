# Print Hut Website

Marketing website for [Print Hut](https://printhut.ca), a custom printing shop in Woodbridge, Ontario.

**Live:** [print-hut-website.pages.dev](https://print-hut-website.pages.dev)

## Run Locally

```bash
npm install
npm run dev     # starts dev server at localhost:4321
npm run build   # builds static site to dist/
npm run preview # preview the production build
```

## Making Content Changes

- **Site copy**: Edit the component files in `src/components/sections/`
- **Business data** (phone, email, address, pricing): Edit `src/lib/siteData.ts`
- **Images**: Replace files in `public/images/` — keep the same filenames or update references
- **Design tokens** (colors, fonts, spacing): Edit `src/styles/global.css` `@theme` block

## Deploy

Merging to `main` auto-deploys to Cloudflare Pages via GitHub Actions. PRs get preview deploy URLs.

Manual deploy:
```bash
npm run build
npx wrangler pages deploy dist --project-name=print-hut-website
```

## Design System

The visual design is governed by the Print Hut design system maintained in the Techshift AI brain repo at `clients/print-hut/design-system/`. The `tokens.json` file is the source of truth for all design values — colors, typography, spacing, radii, shadows, and motion. These tokens are mapped into Tailwind via `src/styles/global.css`.

## SEO & AEO

- Structured data: `LocalBusiness` and `FAQPage` JSON-LD schemas
- AI answer engine support: `/llms.txt` and `/llms-full.txt` at domain root
- Sitemap: auto-generated at `/sitemap-index.xml`
- OG and Twitter Card meta tags on every page

## Tech Stack

Astro 5 + Tailwind CSS 4 + React 19 + Framer Motion + Cloudflare Pages
