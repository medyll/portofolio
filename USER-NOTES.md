# Notes utilisateur

## Enrichissement IA

**Pas d'API Anthropic disponible.** L'enrichissement des descriptions (tagline, description, highlights) doit se faire manuellement via commande dans le chat avec l'assistant.

### Commande à utiliser

```
Enrichis les descriptions des projets dans src/lib/data/overrides.json
```

L'assistant réécrira les champs `tagline`, `description` et `highlights` pour chaque projet, puis mettra à jour `overrides.json` et relancera `pnpm run generate`.

### Processus

1. Éditer manuellement `overrides.json` pour ajouter des descriptions manquantes
2. Ou demander à l'assistant de le faire dans le chat
3. Lancer `pnpm run generate` pour régénérer `projects.json`
4. Commiter les changements

**Note :** Le script `scripts/enrich-ai.mjs` existe mais nécessite `ANTHROPIC_API_KEY` — non fonctionnel sans accès API.
