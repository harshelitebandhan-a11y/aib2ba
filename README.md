# AIB2B Automation — Upgraded Project

## What changed
- **Full white editorial theme** across every page: Instrument Serif + DM Sans, ink-black/cobalt system
- **New pages rewritten:** Home, Services, About, Pricing, Contact, CaseStudies, Solutions, Blog, Privacy, Terms, all service detail pages, all blog post pages
- **New components:** Navbar, Footer, Layout — all CSS-in-JS, zero separate CSS files
- **`useSEO` hook** — each page sets its own `<title>`, `<meta description>`, canonical URL, and Open Graph tags
- **`vercel.json`** — SPA rewrites + security headers + static asset cache
- **`robots.txt`** — allows crawling, points to sitemap
- **`vite.config.js`** — vendor chunk splitting for faster loads

## Deploy to Vercel (3 steps)

```bash
# 1. Install dependencies
npm install

# 2. Test locally
npm run dev

# 3. Deploy
npx vercel --prod
```

Or connect to GitHub and Vercel auto-deploys on every push.

## Local dev
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → ./dist
npm run preview   # preview the production build locally
```

## Files changed / added
```
src/
├── hooks/
│   └── useSEO.js              ← NEW: SEO hook used on every page
├── styles/
│   └── globals.css            ← REWRITTEN: full theme token system + shared utilities
├── components/
│   ├── Navbar.jsx             ← REWRITTEN: new theme, mobile menu, active link state
│   ├── Footer.jsx             ← REWRITTEN: new theme, editorial style
│   └── Layout.jsx             ← UPDATED: imports globals.css, no padding-top needed
├── pages/
│   ├── Home.jsx               ← REWRITTEN: animated workflow canvas, editorial grid
│   ├── Services.jsx           ← REWRITTEN: ruled grid service cards
│   ├── Solutions.jsx          ← REWRITTEN: new theme
│   ├── Pricing.jsx            ← REWRITTEN: new theme + annual toggle
│   ├── CaseStudies.jsx        ← REWRITTEN: new theme
│   ├── Contact.jsx            ← REWRITTEN: new theme + accessible form
│   ├── About.jsx              ← REWRITTEN: new theme + timeline
│   ├── Blog.jsx               ← REWRITTEN: new theme + search/filter
│   ├── Privacy.jsx            ← REWRITTEN: new theme
│   ├── Terms.jsx              ← REWRITTEN: new theme
│   ├── blog/
│   │   ├── BlogPost.jsx       ← REWRITTEN: new theme renderer
│   │   └── *.jsx              ← each imports BlogPost with their slug
│   └── services/
│       ├── ServiceDetail.jsx  ← REWRITTEN: new theme template
│       ├── servicesData.js    ← NEW: centralised service content + SEO descriptions
│       └── *.jsx              ← each imports ServiceDetail with their slug
index.html                     ← UPDATED: Instrument Serif + DM Sans fonts
vercel.json                    ← NEW: SPA rewrites + security headers
public/robots.txt              ← NEW: crawler permissions
vite.config.js                 ← UPDATED: vendor chunk splitting
```

## SEO setup per page
Each page calls `useSEO()` at the top with:
- `title` — unique, keyword-rich, under 60 chars
- `description` — unique, human-written, under 155 chars  
- `canonical` — full absolute URL

To add a sitemap, use `vite-plugin-sitemap` or generate `public/sitemap.xml` manually.

## Adding sitemap for production
```bash
npm install vite-plugin-sitemap --save-dev
```
Then in `vite.config.js`:
```js
import sitemap from 'vite-plugin-sitemap'
export default defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: 'https://aib2bautomation.com' })
  ]
})
```
