# Inventaire des projets — `D:\development`

Scanné le 2026-06-23. GitHub : `github.com/medyll`. Tri par tier de pertinence portfolio.

Légende tier : **A** vitrine · **B** lib/outil solide · **C** niche/proto/archive · **D** mort/vide → exclure.

## Tier A — Vitrine

| Projet | Tech | Taille | Dernier commit | Pitch |
|---|---|---|---|---|
| **idae** ⭐ | TS, Svelte 5 (monorepo pnpm) | 2954 f / 72 MB | 2026-06-22 | **Accent `@medyll/idae-machine`** : framework SvelteKit pour apps IA (v0.136.0). Monorepo des modules : idae-machine, idae-query, idae-router, idae-socket, idae-stator, idae-api/be/csss. Branche `dev`. **Pièce maîtresse.** |
| **css-base** | CSS (`@medyll/css-base`) | 92 f / 5.6 MB | 2026-06-13 | Design system CSS moderne, sans build, features de pointe. Publié. Socle visuel du portfolio. |
| **sive** | SvelteKit 5, Tailwind v4 | 1181 f / 10 MB | 2026-05-25 | Écriture assistée IA, **v1.0 production**. |
| **latent-line** | SvelteKit 5, Vite (monorepo) | 619 f / 13 MB | 2026-06-07 | Production scènes/récits IA, timeline interactive. CI. |
| **humemory** | TS | 47 f / 0.3 MB | 2026-06-22 | Mémoire pour agents IA à dégradation progressive. Actif. |
| **domus** | Rust | 189 f / 1 MB | 2026-05-25 | Framework UI réactif Rust (web + desktop). README 24 KB. |
| **plugable** | Go | 351 f / 50 MB | 2026-05-25 | Microservices dispatch livraison, GDPR. CI. |

## Tier B — Libs / outils solides

| Projet | Tech | Taille | Dernier commit | Pitch |
|---|---|---|---|---|
| **svelte-5-documentor** | TS, Svelte 5 (`@medyll/*`) | 171 f / 0.8 MB | 2026-03-14 | Extracteur métadonnées composants Svelte 5. |
| **pseudo-html-stack** | HTML/JS vanilla | 351 f / 3.3 MB | 2026-05-25 | Composants HTML zéro-build, WCAG 2.2 AA, 7.7 KB gzip. |
| **proton-mail-bridge** | TS (MCP) | 70 f / 0.3 MB | 2026-06-11 | Serveur MCP IMAP/SMTP sur hydroxide. |
| **jobber** | Python | 79 f / 0.4 MB | 2026-06-15 | Adapte un CV à une offre, local-first, sans cloud. |
| **singleton-notepad** | C# / WinUI 3 | 124 f / 3.2 MB | 2026-05-25 | App notes Windows 11, fichier unique, normalisation LLM. |
| **registry-mind** | Kotlin / Android | 134 f / 1.3 GB* | 2026-05-25 | Capteur écran OCR on-device → sync Tailscale. *artefacts build.* |

## Tier C — Niche / prototype / archive

| Projet | Tech | Note |
|---|---|---|
| **opencode-claw** | TS (`@medyll/*`) | Orchestrateur léger pour opencode + dashboard. |
| **sonar-zone** | TS + C/CMake | Device/embedded, workflow BMAD. 489 MB d'artefacts `.o`. |
| **idae.api.lan** | docs/config (XML/YAML) | Spécs API, peu de code. |
| **idae-dashboard** | TS, Svelte 5 | Branche `migrate/mvp-simple`, petit. |
| **mydde.fr** | SvelteKit | Site perso, surtout des images. |
| **rustine** | Rust / Dioxus | Scaffold prototype gestion d'URLs. |
| **idae-legacy** | PHP | Archive ancienne, 662 MB, 2557 fichiers PHP. |

## Tier D — Mort / vide → exclure du portfolio

| Projet | Raison |
|---|---|
| **wollama** | Exclu sur décision. |
| **dash-git** | Exclu sur décision. |
| **idae-pnpm-release** | Exclu sur décision. |
| **idaetrix** | 4 fichiers, vide. |
| **open-design** | 1 fichier. |
| **Gollama** | README 0 KB, abandonné. |
| **openclaw-browser-extension** | README 0 KB, embryon. |
| **openclaw-windows-pwa** | README 0 KB, ~tiny. |
| **openclaw-model-overiew** | minuscule, typo dans le nom. |
| **tailscale-domains** | 17 fichiers, stub. |
| **HelloWinUI3** | projet d'apprentissage / sample. |
| **ferule-core** | 163 `.md` mais aucun git, docs-only. |

\* Tailles disque incluant des artefacts (venv, build, objets) qui ne sont pas du code source.
