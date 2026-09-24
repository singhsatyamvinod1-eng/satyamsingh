import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {ORIGIN,pages,routePaths,jsonLd} from '../src/seo.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const template=await fs.readFile(path.join(dist,'index.html'),'utf8');
const {render}=await import(pathToFileURL(path.join(root,'.ssr','entry-server.js')).href);
const esc=value=>String(value).replace(/[&"<>]/g,char=>({'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'}[char]));
const structured=value=>JSON.stringify(value).replace(/</g,'\\u003c');
function head(url,p){const canonical=ORIGIN+url;return [
  `<title>${esc(p.title)}</title>`,
  `<meta name="description" content="${esc(p.description)}">`,
  '<meta name="author" content="Satyam Singh">',
  '<meta name="robots" content="index, follow, max-image-preview:large">',
  `<link rel="canonical" href="${esc(canonical)}">`,
  `<meta property="og:type" content="${url==='/'?'profile':'website'}">`,
  `<meta property="og:site_name" content="Satyam Singh — Social Media Portfolio">`,
  `<meta property="og:title" content="${esc(p.title)}">`,
  `<meta property="og:description" content="${esc(p.description)}">`,
  `<meta property="og:url" content="${esc(canonical)}">`,
  '<meta name="twitter:card" content="summary">',
  `<meta name="twitter:title" content="${esc(p.title)}">`,
  `<meta name="twitter:description" content="${esc(p.description)}">`,
  `<script id="structured-data" type="application/ld+json">${structured(jsonLd(url))}</script>`,
].join('\n    ')}
for(const url of routePaths){const markup=render(url);if(!markup.includes('<h1'))throw new Error(`Missing page heading on ${url}`);const html=template.replace('</head>',`    ${head(url,pages[url])}\n  </head>`).replace('<div id="root"></div>',`<div id="root">${markup}</div>`);const target=url==='/'?path.join(dist,'index.html'):path.join(dist,url.slice(1),'index.html');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,html);if(url!=='/')await fs.writeFile(path.join(dist,`${url.slice(1)}.html`),html);}
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routePaths.map(p=>`  <url><loc>${esc(ORIGIN+p)}</loc></url>`).join('\n')}\n</urlset>\n`;
await fs.writeFile(path.join(dist,'sitemap.xml'),sitemap);
await fs.writeFile(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${ORIGIN}/sitemap.xml\n`);
await fs.writeFile(path.join(dist,'404.html'),template.replace('</head>','    <title>Page not found | Satyam Singh</title>\n    <meta name="robots" content="noindex">\n  </head>').replace('<div id="root"></div>',`<div id="root">${render('/missing-page')}</div>`));
console.log(`Prerendered ${routePaths.length} portfolio routes with route-specific metadata.`);
