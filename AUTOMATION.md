# Génération & mise à jour du contenu

Objectif : **ne jamais rédiger le portfolio à la main**. Le contenu est dérivé des repos, stocké en JSON, et ré-enrichissable par IA à volonté.

## Principe

```
D:\development\*           scan lecture seule
   │  README, package.json, git, manifestes
   ▼
generate-projects.(ts|ps1)     ───►  src/lib/data/projects.json   ◄── source de vérité du site
   │                                          │
   │  (optionnel)                             ▼
   ▼                                  SvelteKit build (adapter-static)
enrich-ai.ts (Claude API)                     │
   │  réécrit blurb/tags/highlights           ▼
   └──────────────────────────────►   GitHub Pages
```

Le layout du site ne dépend que de `projects.json`. Régénérer = relancer le script. Aucun composant à toucher.

## Schéma `projects.json`

```jsonc
{
  "generatedAt": "2026-06-23",
  "projects": [
    {
      "slug": "idae",
      "name": "Idae",
      "tier": "A",                    // A|B|C — D exclu automatiquement
      "tagline": "Monorepo full-stack data-management multi-DB",
      "description": "…",             // 1er paragraphe du README, ou réécrit par IA
      "tech": ["TypeScript", "Svelte 5", "pnpm"],
      "repo": "https://github.com/medyll/idae",
      "homepage": null,               // si déployé
      "lastCommit": "2026-06-22",
      "stars": 0,                     // via GitHub API (optionnel)
      "metrics": { "files": 2954, "sizeMB": 72 },
      "highlights": ["Sync temps réel", "5 backends DB"],
      "featured": true,
      "include": true                 // override manuel
    }
  ]
}
```

## Étape 1 — Génération (déterministe, sans IA)

Un script lit chaque dossier et remplit les champs factuels :
- `name`/`description` ← `package.json` puis fallback README (titre + 1er paragraphe).
- `tech` ← détection par manifeste + extensions dominantes (déjà cartographié dans [INVENTAIRE.md](./INVENTAIRE.md)).
- `repo` ← `git remote get-url origin`.
- `lastCommit` ← `git log -1`.
- `metrics` ← comptage fichiers/taille hors `node_modules`/`.git`/`dist`/`target`.
- `tier`/`include` ← table de classement versionnée (un `overrides.json` éditable à la main).

Le tier D n'est jamais émis. Les overrides permettent de forcer inclusion/exclusion sans retoucher le code.

## Étape 2 — Enrichissement IA (optionnel, idempotent)

Un second script appelle l'API Claude pour, par projet :
- réécrire `tagline` (≤ 8 mots) et `description` (2-3 phrases, ton recruteur).
- extraire 3 `highlights` depuis le README.
- normaliser `tech`.

Garde-fous : ne réécrit que les champs marqués `aiEditable`, conserve les overrides manuels, diff visible avant commit. Réexécutable sans casser (idempotent).

> Modèle conseillé : `claude-opus-4-8` pour la qualité éditoriale, ou `claude-haiku-4-5` pour un batch rapide/économique. (Vérifier l'API via la skill `claude-api` au moment de coder.)

## Étape 3 — Rafraîchissement régulier

Trois options, du plus simple au plus auto :
1. **Manuel** : `pnpm run generate && pnpm run build` quand tu veux.
2. **Pre-commit / npm script** : régénère `projects.json` avant chaque build.
3. **GitHub Action planifiée** (cron hebdo) : régénère depuis les repos publics via l'API GitHub (pas besoin du disque local), commit si diff, redéploie Pages.

> Note : l'Action planifiée lit les repos via l'**API GitHub** (le disque `D:\` n'existe pas dans le runner). Le scan local (`D:\development`) sert surtout à la première génération et aux repos privés/non poussés.

## Déploiement GitHub Pages

- `@sveltejs/adapter-static`, `paths.base` = nom du repo si pas de domaine custom.
- Workflow `.github/workflows/deploy.yml` : build → upload artifact → `actions/deploy-pages`.
- Domaine possible plus tard : `mydde.fr` (repo existant) en CNAME.

## Fichiers à créer (au moment du code)

```
portofolio/
├─ scripts/generate-projects.ts     # étape 1
├─ scripts/enrich-ai.ts             # étape 2
├─ src/lib/data/projects.json       # sortie générée
├─ src/lib/data/overrides.json      # tiers + inclusions manuelles
├─ src/routes/+page.svelte          # grille de projets
└─ .github/workflows/deploy.yml     # build + Pages
```
