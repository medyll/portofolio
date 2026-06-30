# Rapport Portfolio — medyll

> Premier tour de découverte de `D:\development` + recommandation techno + méthodologie.
> Généré le 2026-06-23. Aucun code écrit à ce stade.

## TL;DR

- **33 projets** scannés. ~9 dignes d'un portfolio, ~8 « second rideau », ~7 morts/vides à exclure.
- **Stack dominante : TypeScript + Svelte 5 / SvelteKit.** Tu maintiens aussi du Rust, Go, Python, Kotlin, C#.
- **Techno recommandée pour le portfolio : SvelteKit + `adapter-static` + CSS vanilla, déployé sur GitHub Pages.**
  - C'est ta stack maîtrisée, zéro serveur, hébergement GitHub gratuit.
  - ⚠️ **`@medyll/css-base` écarté** : Chrome/Edge 125+ only (`attr()`/`@function` exigent 139+). Un portfolio public doit être cross-browser → CSS maison portable (custom props + `prefers-color-scheme` + `color-mix`).
- **Contenu généré, pas écrit à la main** : un script scanne `D:\development`, lit chaque `README` + `package.json` + git, produit un `projects.json`. Une passe IA optionnelle enrichit les descriptions. Voir [AUTOMATION.md](./AUTOMATION.md).
- Inventaire complet et tiers : [INVENTAIRE.md](./INVENTAIRE.md).

---

## 1. Choix de la techno

### Recommandé : SvelteKit static → GitHub Pages

| Critère | Verdict |
|---|---|
| Maîtrise | Svelte 5 partout dans tes repos (idae, sive, latent-line…) |
| Cross-browser | CSS vanilla portable → marche Chrome/FF/Safari/Edge (css-base écarté car Chrome-only) |
| Hébergement GitHub | `@sveltejs/adapter-static` → site 100% statique → GitHub Pages natif |
| SEO / perf | Pré-rendu complet, pas de JS serveur, Lighthouse facile au vert |
| Régénération IA | Données en JSON → un agent met à jour le contenu sans toucher au layout |

**Stack précise :**
- SvelteKit (Svelte 5 runes) + Vite
- `@sveltejs/adapter-static` (prerender `entries`)
- CSS vanilla cross-browser (custom props, `prefers-color-scheme`, `[data-theme]`, `color-mix`)
- `svelte-5-documentor` (ton propre outil) en bonus pour auto-documenter les composants
- Déploiement : GitHub Actions → `gh-pages` / Pages

### Alternatives écartées

- **Astro** : excellent pour un portfolio de contenu, mais te ferait quitter ta stack Svelte maîtrisée. Garde-le en plan B si tu veux du multi-framework par île.
- **Next.js** : surdimensionné, écosystème React que tu n'utilises pas ici.
- **HTML statique pur + `pseudo-html-stack`** (ton repo) : viable et zéro-build, mais moins ergonomique pour lister/filtrer des projets dynamiquement.

---

## 2. Méthodologie de découverte (ce qui a été fait)

Scan non destructif, lecture seule, en 3 passes :

1. **Topologie** — `Get-ChildItem` racine → 33 dossiers, triés par date.
2. **Métadonnées par projet** — pour chacun : `package.json` (nom/desc/workspaces), manifestes (`Cargo.toml`, `go.mod`, `pnpm-workspace.yaml`, `*.csproj`, `requirements.txt`), `git remote` + dernier commit + branche, présence/taille du README.
3. **Maturité** — comptage récursif des fichiers source (hors `node_modules`/`.git`/`dist`/`target`…), extensions dominantes, taille disque → distingue projet réel de coquille vide.

Critères de tri en tiers : README substantiel, commits récents, présence de CI, manifeste de publication (`@medyll/*`), volume de code réel.

---

## 3. Repos les plus intéressants (sélection portfolio)

Détail complet dans [INVENTAIRE.md](./INVENTAIRE.md). Sélection :

### Vitrine (Tier A)
- **idae — accent sur `@medyll/idae-machine`** — Framework SvelteKit pour bâtir des applications **propulsées par IA**, avec facilité (v0.136.0, mûr). `idae` est le **monorepo des modules** qui le composent : `idae-machine` (framework), `idae-query` (requêtes type MongoDB), `idae-router`, `idae-socket` (sync backend), `idae-stator` (state management), `idae-api`/`idae-be`/`idae-csss`. 2954 fichiers, TS+Svelte. **Pièce maîtresse.**
- **css-base** (`@medyll/css-base`) — Design system CSS moderne, sans build, features CSS de pointe. Ton propre DS (Chrome/Edge-only — exposé comme projet, pas utilisé pour styler le portfolio).
- **sive** — Logiciel d'écriture assistée par IA, **v1.0 production**, SvelteKit 5 + Tailwind v4.
- **latent-line** — Production de scènes/récits pilotée IA, timeline interactive. SvelteKit 5, CI.
- **humemory** — Moteur de mémoire pour agents IA qui « oublie comme un humain ». Concept original, actif.
- **domus** — Framework UI réactif **en Rust** (web + desktop, zéro JS). README très soigné.
- **plugable** — Plateforme microservices **Go** (dispatch livraison, tracking temps réel, GDPR). CI.

### Outils/libs publiables (Tier B)
- **svelte-5-documentor** (`@medyll/*`) — extracteur de métadonnées de composants Svelte 5.
- **pseudo-html-stack** — système de composants HTML vanilla, WCAG 2.2 AA, 7.7 KB gzip.
- **proton-mail-bridge** — serveur MCP IMAP/SMTP au-dessus de hydroxide.
- **jobber** — outil Python local-first qui adapte un CV à une offre.
- **singleton-notepad** — app notes Windows 11 (WinUI/C#) + normalisation LLM.
- **registry-mind** — capteur Android (Kotlin) OCR on-device → sync Tailscale.

### À exclure du portfolio
- **Tier D (morts/vides)** : `idaetrix`, `open-design`, `Gollama`, `openclaw-browser-extension`, `openclaw-windows-pwa`, `openclaw-model-overiew`, `tailscale-domains`, `HelloWinUI3` (sample), `ferule-core` (docs only, pas de git).
- **Exclus sur décision** : `wollama`, `dash-git`, `idae-pnpm-release`.

---

## 4. Prochaines étapes proposées

1. Valider la techno (SvelteKit static) et la sélection de repos.
2. Implémenter le pipeline de génération de contenu — voir [AUTOMATION.md](./AUTOMATION.md).
3. Scaffolder le site SvelteKit + CSS vanilla + workflow GitHub Pages.
4. Première génération `projects.json`, revue manuelle, passe IA d'enrichissement.

*Dis « go » et je code le scaffold + le générateur.*
