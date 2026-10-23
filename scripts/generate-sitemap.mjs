// scripts/generate-sitemap.mjs
// Builds public/sitemap.xml from every <Route path='...'> in src/App.tsx,
// and adds a <video:video> entry for each S3 video URL found in that route's component file.
// Runs automatically before each build via "prebuild" in package.json.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://realgrappling.com';

// Routes that should NOT be indexed (user-specific or private pages)
const EXCLUDE = new Set(['/myList']);

// Optional priority overrides; everything else gets the default
const PRIORITY = { '/': '1.0', '/transitions': '0.9', '/about': '0.5' };
const DEFAULT_PRIORITY = '0.8';

// Google requires a thumbnail for every video. Until you have per-video thumbnails,
// every video uses this image. To use per-video thumbnails, upload a .jpg next to each
// video in S3 with the same name (armbar.mp4 -> armbar.jpg) and set this to true.
const USE_MATCHING_JPG_THUMBNAILS = false;
const DEFAULT_THUMBNAIL = 'https://real-grappling-bucket.s3.us-east-1.amazonaws.com/logo-real-grappling.png';

// Matches full video URLs written in your route files (S3 or CloudFront)
const VIDEO_URL = /https?:\/\/[^\s'"`<>)]+?\.(?:mp4|mov|webm|m4v)(?:\?[^\s'"`<>)]*)?/gi;

// ---------------------------------------------------------------------------

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = resolve(root, 'src');
const appSource = readFileSync(resolve(srcDir, 'App.tsx'), 'utf8');

const escapeXml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// "attackingMount" -> "Attacking Mount", "standup2on1WristControl" -> "Standup 2on1 Wrist Control"
const humanizeRoute = (p) =>
  p
    .replace(/^\//, '')
    .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase());

// "armbar_from-mount.mp4" -> "Armbar From Mount"
const humanizeFile = (url) => {
  const name = decodeURIComponent(url.split('?')[0].split('/').pop()).replace(/\.[^.]+$/, '');
  return name
    .replace(/[-_+]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

// Map component name -> source file, from the import lines in App.tsx
const componentFiles = {};
for (const m of appSource.matchAll(/import\s+(\w+)\s+from\s+['"](\.[^'"]+)['"]/g)) {
  const [, name, rel] = m;
  const base = resolve(srcDir, rel);
  const candidates = [base, `${base}.tsx`, `${base}.ts`, `${base}.jsx`, `${base}.js`];
  const file = candidates.find((f) => existsSync(f) && !f.endsWith('/'));
  if (file) componentFiles[name] = file;
}

// Collect routes: path + the component they render
const routes = [];
const seen = new Set();
for (const m of appSource.matchAll(/<Route\s+[^>]*?path=['"]([^'"]+)['"][^>]*?element=\{\s*<(\w+)/g)) {
  const [, path, component] = m;
  if (path.includes(':') || path.includes('*') || EXCLUDE.has(path) || seen.has(path)) continue;
  seen.add(path);
  routes.push({ path, component });
}

let videoCount = 0;
const pagesWithoutVideos = [];

const urlEntries = routes.map(({ path, component }) => {
  const file = componentFiles[component];
  const source = file ? readFileSync(file, 'utf8') : '';
  const videos = [...new Set(source.match(VIDEO_URL) ?? [])];
  if (path !== '/' && !PRIORITY[path] && videos.length === 0) pagesWithoutVideos.push(path);
  videoCount += videos.length;

  const pageTitle = humanizeRoute(path) || 'Real Grappling';
  const videoXml = videos
    .map((url) => {
      const title = humanizeFile(url);
      const thumb = USE_MATCHING_JPG_THUMBNAILS ? url.split('?')[0].replace(/\.[^.]+$/, '.jpg') : DEFAULT_THUMBNAIL;
      return (
        `    <video:video>\n` +
        `      <video:thumbnail_loc>${escapeXml(thumb)}</video:thumbnail_loc>\n` +
        `      <video:title>${escapeXml(title)}</video:title>\n` +
        `      <video:description>${escapeXml(`${title} - ${pageTitle} technique video from Real Grappling.`)}</video:description>\n` +
        `      <video:content_loc>${escapeXml(url)}</video:content_loc>\n` +
        `      <video:family_friendly>yes</video:family_friendly>\n` +
        `    </video:video>\n`
      );
    })
    .join('');

  return (
    `  <url>\n` +
    `    <loc>${SITE}${path}</loc>\n` +
    `    <priority>${PRIORITY[path] ?? DEFAULT_PRIORITY}</priority>\n` +
    videoXml +
    `  </url>`
  );
});

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
  '        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n' +
  urlEntries.join('\n') +
  '\n</urlset>\n';

writeFileSync(resolve(root, 'public/sitemap.xml'), xml);
console.log(`sitemap: wrote ${routes.length} URLs and ${videoCount} videos to public/sitemap.xml`);
if (pagesWithoutVideos.length) {
  console.log(`sitemap: no video URLs found in ${pagesWithoutVideos.length} technique pages: ${pagesWithoutVideos.join(', ')}`);
}
