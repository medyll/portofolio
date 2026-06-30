# portofolio readme

Static portfolio site (SvelteKit + vanilla CSS), deployable to GitHub Pages.
Content is **generated**, not hand-written — see [AUTOMATION.md](./AUTOMATION.md).

## Stack
- SvelteKit (Svelte 5 runes) + Vite
- `@sveltejs/adapter-static` → fully prerendered, no server
- Vanilla CSS (custom properties, `prefers-color-scheme`, cross-browser)

## Develop
```bash
pnpm install
pnpm run generate   # scan repos in ../ → src/lib/data/projects.json
pnpm run dev
```

## Content pipeline
1. **Curate** — edit `src/lib/data/overrides.json` (the whitelist + per-field overrides).
2. **Generate** — `pnpm run generate` scans each repo for git/metrics/README and writes `src/lib/data/projects.json`.
3. **Enrich (optional)** — `ANTHROPIC_API_KEY=… pnpm run enrich` rewrites copy via Claude, idempotently.
4. **Build** — `pnpm run build` (runs generate, then `vite build`).

## Deploy
Push to `main` → `.github/workflows/deploy.yml` builds and publishes to Pages.
Enable Pages → Source: **GitHub Actions** in repo settings.

## Docs
- [RAPPORT.md](./RAPPORT.md) — tech choice, methodology, repo selection
- [INVENTAIRE.md](./INVENTAIRE.md) — full repo inventory
- [AUTOMATION.md](./AUTOMATION.md) — content generation pipeline
