# Sahibul NF — Portfolio

Personal portfolio for **Sahibul Nuzul Firdaus** (Flutter & Golang engineer).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Netlify (Forms + deploy)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Root `netlify.toml` sets `base = "site"` and publishes `dist`.

## SEO

- `public/robots.txt` and `public/sitemap.xml` are served at the site root.
- JSON-LD (`Person` + `WebSite`) is injected from `src/components/SeoJsonLd.tsx`.
- Submit `https://sahibul.dev/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Analytics (optional)

Analytics scripts load only when env vars are set at build time in Netlify:

| Variable | Provider |
| --- | --- |
| `VITE_CF_WEB_ANALYTICS_TOKEN` | [Cloudflare Web Analytics](https://dash.cloudflare.com/?to=/:account/web-analytics) (free, recommended — DNS already on Cloudflare) |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 (`G-XXXXXXXX`) |

Add the variable in **Netlify → Site configuration → Environment variables**, then trigger a new deploy.
