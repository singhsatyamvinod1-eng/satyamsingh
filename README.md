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
- The supplied portrait is published as `public/satyam-portrait.png`. Edit the profile to add an email, phone and social links. A replacement photo chosen through the editor stays in the local browser until exported and published.
- Case studies, content gallery, skills, platform experience, metrics, journey, education, certifications and work principles have edit controls.
- Profile name, metadata and JSON-LD in `src/seo.js` are based on the currently confirmed public details; update those along with `src/data.js` if the published identity changes.

## Confirmed information and placeholders

The name, Mumbai location, headline, work history, platform experience, education and listed skills come from the user's [LinkedIn profile](https://www.linkedin.com/in/satyam-singh77/). Satyam directly clarified that his 3rd Planet Global role was a social media internship focused on social media management, competitor analysis, trend research and content calendar management. Teqfox Fintech Solutions work history was also supplied directly by Satyam. The work page labels LinkedIn-sourced posts and owner-confirmed experience separately; neither is presented as a client campaign. The HubSpot certifications are based on his own LinkedIn posts. The portrait was edited from a user-supplied image to replace the indoor background with a studio backdrop.

Exact employment dates, the Teqfox role and responsibilities, client campaigns and results, skill ratings, contact email and phone still need owner input. The Impact page summarizes the owner-shared IDSSPL content calendar: 34 dated planning slots from 24 Sep to 31 Oct (18 static, 12 carousel, 4 reel). The sheet does not specify a year or prove publication or performance; only one Approval cell is marked Done. Performance metrics remain empty until supported by an analytics export or screenshot with a date range and campaign context. Browser-entered metric values remain local drafts until exported and published. The chrome artwork is original abstract decorative art, not a claimed client campaign.

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
- `public/satyam-portrait.png`: user-supplied portrait with an edited studio background

Three.js is not included because the existing art uses a static asset and no real-time 3D scene is needed.
