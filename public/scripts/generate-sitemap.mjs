// scripts/generate-sitemap.mjs
// Builds public/sitemap.xml by reading every <Route path='...'> in src/App.tsx.
// Runs automatically before each build via "prebuild" in package.json.
// New routes added to App.tsx are picked up automatically.

import { readFileSync, writeFileSync } from 'node:fs';

const SITE = 'https://realgrappling.com';

// Routes that should NOT be indexed (user-specific or private pages)
const EXCLUDE = new Set(['/myList']);

// Optional priority overrides; everything else gets the default
const PRIORITY = { '/': '1.0', '/transitions': '0.9', '/about': '0.5' };
const DEFAULT_PRIORITY = '0.8';

const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');

// Match path='...' or path="..." on <Route> elements
const routes = [...appSource.matchAll(/<Route\s+[^>]*path=['"]([^'"]+)['"]/g)]
  .map((m) => m[1])
  .filter((p) => !p.includes(':') && !p.includes('*')) // skip dynamic and wildcard routes
  .filter((p) => !EXCLUDE.has(p));

const unique = [...new Set(routes)];
const today = new Date().toISOString().slice(0, 10);

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  unique
    .map(
      (p) =>
        `  <url>\n` +
        `    <loc>${SITE}${p === '/' ? '/' : p}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <priority>${PRIORITY[p] ?? DEFAULT_PRIORITY}</priority>\n` +
        `  </url>`
    )
    .join('\n') +
  '\n</urlset>\n';

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap: wrote ${unique.length} URLs to public/sitemap.xml`);
