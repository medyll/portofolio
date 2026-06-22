#!/usr/bin/env node
// Deterministic project data generator.
// Scans the curated repos listed in overrides.json and emits projects.json.
// Facts (git, metrics, README) come from disk; overrides.json wins per-field.
//
// Usage: node scripts/generate-projects.mjs
// Env:   DEV_ROOT  override the dev folder (default: parent of this repo)

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const DEV_ROOT = process.env.DEV_ROOT ?? resolve(repoRoot, '..');

const SKIP_DIRS = new Set([
  'node_modules', '.git', 'dist', 'build', 'target', '.svelte-kit',
  'out', 'bin', 'obj', '.next', 'coverage', '__pycache__', '.venv', 'venv'
]);

const overridesPath = join(repoRoot, 'src/lib/data/overrides.json');
const overrides = JSON.parse(readFileSync(overridesPath, 'utf8')).projects;

function git(dir, args) {
  try {
    return execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

function readPkg(dir) {
  const p = join(dir, 'package.json');
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

// First real paragraph of the README (skips title, badges, blockquotes).
function readmeIntro(dir) {
  for (const name of ['README.md', 'README-full.md', 'readme.md']) {
    const p = join(dir, name);
    if (!existsSync(p)) continue;
    const lines = readFileSync(p, 'utf8').split(/\r?\n/);
    const buf = [];
    for (const raw of lines) {
      const line = raw.trim();
      if (!line) {
        if (buf.length) break;
        continue;
      }
      if (line.startsWith('#') || line.startsWith('![') || line.startsWith('[![') || line.startsWith('>')) continue;
      buf.push(line);
    }
    if (buf.length) {
      return buf.join(' ').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
    }
  }
  return '';
}

function metrics(dir) {
  let files = 0;
  let bytes = 0;
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    let entries;
    try {
      entries = readdirSync(cur, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      if (e.isDirectory()) {
        if (!SKIP_DIRS.has(e.name)) stack.push(join(cur, e.name));
      } else if (e.isFile()) {
        files++;
        try {
          bytes += statSync(join(cur, e.name)).size;
        } catch {}
      }
    }
  }
  return { files, sizeMB: Math.round((bytes / 1048576) * 10) / 10 };
}

const projects = [];
for (const [slug, ov] of Object.entries(overrides)) {
  if (slug.startsWith('_') || ov.include === false) continue;
  const dir = join(DEV_ROOT, slug);
  if (!existsSync(dir)) {
    console.warn(`! skip ${slug} — not found at ${dir}`);
    continue;
  }

  const pkg = readPkg(dir);
  const remote = git(dir, ['remote', 'get-url', 'origin']);
  const lastCommit = git(dir, ['log', '-1', '--format=%cs']) || null;

  projects.push({
    slug,
    name: ov.name ?? pkg?.name ?? slug,
    tier: ov.tier ?? 'C',
    tagline: ov.tagline ?? pkg?.description ?? '',
    description: ov.description ?? pkg?.description ?? readmeIntro(dir),
    accent: ov.accent ?? null,
    tech: ov.tech ?? [],
    repo: ov.repo ?? (remote ? remote.replace(/\.git$/, '') : null),
    homepage: ov.homepage ?? pkg?.homepage ?? null,
    lastCommit: ov.lastCommit ?? lastCommit,
    metrics: ov.metrics ?? metrics(dir),
    highlights: ov.highlights ?? [],
    featured: ov.featured ?? false
  });
}

const tierRank = { A: 0, B: 1, C: 2 };
projects.sort((a, b) =>
  tierRank[a.tier] - tierRank[b.tier] ||
  Number(b.featured) - Number(a.featured) ||
  (b.lastCommit ?? '').localeCompare(a.lastCommit ?? '')
);

const out = { generatedAt: new Date().toISOString().slice(0, 10), projects };
const outPath = join(repoRoot, 'src/lib/data/projects.json');
writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
console.log(`✓ ${projects.length} projects → ${outPath}`);
