#!/usr/bin/env node
// Optional AI enrichment pass (idempotent).
// Rewrites tagline/description/highlights for each project using the Claude API,
// then writes the result back into overrides.json so the next `generate` is stable.
//
// Requires: ANTHROPIC_API_KEY in env.
// Usage:   node scripts/enrich-ai.mjs            (all projects)
//          node scripts/enrich-ai.mjs idae sive  (subset)
//
// This is a STUB wired for the official SDK. Verify model id / params with the
// `claude-api` skill before running. Install: pnpm add -D @anthropic-ai/sdk

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const overridesPath = join(repoRoot, 'src/lib/data/overrides.json');

const MODEL = 'claude-opus-4-8'; // editorial quality; use claude-haiku-4-5 for cheap batch
const only = process.argv.slice(2);

const key = process.env.ANTHROPIC_API_KEY;
if (!key) {
  console.error('ANTHROPIC_API_KEY not set — aborting.');
  process.exit(1);
}

const data = JSON.parse(readFileSync(overridesPath, 'utf8'));
const targets = Object.keys(data.projects).filter(
  (s) => !s.startsWith('_') && (only.length === 0 || only.includes(s))
);

let Anthropic;
try {
  ({ default: Anthropic } = await import('@anthropic-ai/sdk'));
} catch {
  console.error('Install the SDK first: pnpm add -D @anthropic-ai/sdk');
  process.exit(1);
}
const client = new Anthropic({ apiKey: key });

const SYSTEM =
  'You rewrite portfolio copy for a senior full-stack developer. ' +
  'Return STRICT JSON {"tagline":string,"description":string,"highlights":string[]} only. ' +
  'tagline <= 8 words. description 2-3 sentences, recruiter tone. 3 highlights max. Language: English.';

for (const slug of targets) {
  const p = data.projects[slug];
  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 600,
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: `Project: ${p.name ?? slug}\nCurrent tagline: ${p.tagline ?? ''}\nCurrent description: ${p.description ?? ''}\nTech: ${(p.tech ?? []).join(', ')}`
      }
    ]
  });
  const text = msg.content.find((c) => c.type === 'text')?.text ?? '{}';
  try {
    const parsed = JSON.parse(text);
    Object.assign(p, parsed);
    console.log(`✓ enriched ${slug}`);
  } catch {
    console.warn(`! skipped ${slug} — non-JSON response`);
  }
}

writeFileSync(overridesPath, JSON.stringify(data, null, 2) + '\n');
console.log(`Saved ${overridesPath}. Run "pnpm run generate" to rebuild projects.json.`);
