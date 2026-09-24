# Signal — Satyam Singh's social portfolio

A responsive React portfolio using React Router DOM 7 and Vite. Seven route pages are prerendered as HTML for fast initial content and search metadata. The published build is static.

## Run locally

Install Node.js 20.19+ or 22.12+ and pnpm, then:

```sh
pnpm install
pnpm dev
```

For a production build and SEO output check:

```sh
pnpm build
pnpm verify:seo
pnpm preview
```

The build writes `dist/`, including page HTML at `/work`, `/skills`, `/impact`, `/journey`, `/about`, and `/contact`, plus `sitemap.xml`, `robots.txt`, and a 404 page. React Router DOM handles client navigation; direct route loads are supported by both `dist/<route>.html` and `dist/<route>/index.html`.

## Personalise

- Edit the published content in `src/data.js`, or use the cards' **Edit** controls to make browser-local drafts.
- Browser drafts stay on that device. To publish one, choose **Download content**, replace `src/data.js` with the downloaded file, build, and deploy again.
- Edit the profile to add your actual photo (PNG, JPEG or WebP, up to 2 MB), email, phone and social links. A photo chosen through the editor stays in the local browser until exported and published.
- Case studies, content gallery, skills, platform experience, metrics, journey and work principles have edit controls.
- Profile name, metadata and JSON-LD in `src/seo.js` are based on the currently confirmed public details; update those along with `src/data.js` if the published identity changes.

## Confirmed information and placeholders

The name, Mumbai location, social media background and IDSSPL Technologies listing came from the user's supplied public [LinkedIn profile](https://www.linkedin.com/in/satyam-singh77/). The original profile photo was not accessible. The SS monogram remains until the actual image is supplied. No substitute person was generated.

Specific roles, dates, clients, campaign results, skill ratings, platform experience, email and phone are marked placeholders. The dashboard's sample charts are labelled illustrative and are not connected to an analytics account. The chrome artwork is original abstract decorative art, not a claimed client campaign.

## Contact

With a real email in the profile, the form prepares an email draft in the visitor's email app. Without one, it shows a copyable message for LinkedIn. The site sends nothing automatically and stores no visitor contact message on a server.

## SEO

Each route has a unique prerendered `<title>`, description, canonical URL, Open Graph and X metadata, an H1, and JSON-LD. `scripts/prerender.mjs` creates the static output; `scripts/audit-seo.mjs` checks it. The Sitemap and robots file are created at build time. A 404 page returns a non-indexable response when supported by the static host.

The deployed Site currently has owner-only access. Search engines cannot crawl it until access is changed. A 100 SEO score depends on the deployed audience, crawlability, content and the specific audit conditions, so it is not guaranteed by the build alone.

## Source

- `src/App.jsx`: React shell, routing, editor and modal
- `src/views.jsx`: seven page components
- `src/data.js`: editable portfolio content
- `src/seo.js`: page metadata and structured data
- `src/styles.css`: responsive visual system
- `scripts/prerender.mjs`: route HTML, sitemap and robots generation
- `scripts/audit-seo.mjs`: build output checks
- `public/chrome-loop.png`: abstract visual asset

Three.js is not included because the existing art uses a static asset and no real-time 3D scene is needed.
