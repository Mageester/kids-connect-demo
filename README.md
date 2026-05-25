# Kids Connect

Production website for [Kids Connect](https://kidsconnect.ca) — play-based social groups and autism services for neurodiverse children in Burnaby, BC.

## Tech

- React 18 + Vite 5
- React Router 6
- react-helmet-async (per-page SEO)
- Deploy: Cloudflare Pages

## Develop

```sh
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```sh
npm run build
npm run preview
```

`dist/` contains the static production output.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Node version: 20+ (set `NODE_VERSION=20` env var if needed).

Cloudflare reads `public/_headers` and `public/_redirects` automatically (copied into `dist` by Vite).

### Option B — Wrangler CLI

```sh
npm install -g wrangler
wrangler login
npm run deploy
```

## Production checklist

- [x] Per-page SEO (title, description, canonical, OG, Twitter)
- [x] JSON-LD LocalBusiness + FAQPage schema
- [x] sitemap.xml + robots.txt
- [x] SPA fallback via `_redirects`
- [x] Long-cache headers for hashed assets
- [x] Security headers (HSTS, X-Frame-Options, Referrer-Policy)
- [x] Lazy image loading + explicit width/height (CLS)
- [x] Reduced-motion support
- [x] Keyboard a11y (focus rings, button semantics, aria-expanded)
- [ ] Favicon (`public/favicon.ico`) + Apple touch icon (`public/apple-touch-icon.png`) — drop in PNG/ICO derived from `public/uploads/cropped-logo.webp`
- [ ] Connect form to real backend (current submit simulates with setTimeout)
- [ ] Point domain `kidsconnect.ca` to Cloudflare Pages

## Contact form

`ContactPage.jsx` currently simulates submission. Wire to a real endpoint by replacing the `setTimeout` in `handleSubmit` with a `fetch()` to a Cloudflare Pages Function, Worker, or third-party form service (Formspree, Web3Forms, etc.).
