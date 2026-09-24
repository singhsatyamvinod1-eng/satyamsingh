import fs from 'node:fs';
import path from 'node:path';
import {pages,routePaths,ORIGIN} from '../src/seo.js';

let failures=[];
for(const route of routePaths){
  const file=route==='/'?'dist/index.html':`dist${route}/index.html`;
  if(!fs.existsSync(file)){failures.push(`${route}: missing prerendered HTML`);continue}
  const html=fs.readFileSync(file,'utf8'),p=pages[route],head=html.split('</head>')[0];
  const one=(expression)=>[...html.matchAll(expression)].length===1;
  if([...head.matchAll(/<title>[^<]+<\/title>/g)].length!==1)failures.push(`${route}: expected one title`);
  if(!html.includes(`<title>${p.title.replace(/&/g,'&amp;')}</title>`))failures.push(`${route}: incorrect title`);
  if([...head.matchAll(/<meta name="description" content="[^"]+">/g)].length!==1)failures.push(`${route}: expected one description`);
  if(!one(/<h1(?:\s[^>]*)?>/g))failures.push(`${route}: expected one visible h1`);
  if(!html.includes(`<link rel="canonical" href="${ORIGIN}${route}">`))failures.push(`${route}: incorrect canonical`);
  if(!html.includes(`property="og:url" content="${ORIGIN}${route}"`))failures.push(`${route}: incorrect OG URL`);
  if(!html.includes(`property="og:image" content="${ORIGIN}/satyam-portrait.png"`))failures.push(`${route}: missing portrait social image`);
  const script=html.match(/<script id="structured-data" type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  try{const value=JSON.parse(script);if(!Array.isArray(value)||!value.length)throw Error()}catch{failures.push(`${route}: invalid structured data`)}
  if(!html.includes('src="/assets/')&&!html.includes('src="/src/entry-client.jsx"'))failures.push(`${route}: missing client entry`);
  if(html.includes('window.PORTFOLIO'))failures.push(`${route}: legacy script retained`);
  console.log(`${route.padEnd(9)} ${p.title}`);
}
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');for(const route of routePaths)if(!sitemap.includes(`<loc>${ORIGIN}${route}</loc>`))failures.push(`${route}: missing from sitemap`);
if(!fs.readFileSync('dist/robots.txt','utf8').includes(`${ORIGIN}/sitemap.xml`))failures.push('Missing robots sitemap');
if(!fs.existsSync('dist/404.html'))failures.push('Missing 404 page');
if(!fs.existsSync('dist/satyam-portrait.png'))failures.push('Missing portrait asset');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('Route HTML, metadata, structured data, sitemap and robots checks passed.');
