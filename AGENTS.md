# Instructions for coding agents

This repository builds a portfolio from projects stored next to it under
`D:\development`. Project facts come from those local repositories; editorial
copy lives here.

## Update announcements are action requests

Treat messages such as these as requests to update the portfolio now:

- `humemory a été mis à jour`
- `nouveau repo acp-team`
- `X updated`, `new repo Y`, or `mets à jour le portfolio`

Do not merely acknowledge the announcement and do not ask what to do unless the
named repository cannot be identified. Inspect the repository, update its
portfolio entry, regenerate the catalogue, and run the checks below.

## Source files

- `src/lib/data/overrides.json`: curated project list and hand-written card copy.
- `src/lib/data/project-details.ts`: detail-page diagram and SEO paragraph.
- `src/lib/data/projects.json`: generated output. Never edit it by hand.
- `scripts/generate-projects.mjs`: deterministic local-repository scanner.

The site copy is written in English even when the request arrives in French.

## Workflow for an existing project

1. Find the local repository at `D:\development\<slug>` and inspect it read-only.
   Read its origin, `package.json`, current README or agent notes, recent commits,
   and changelog when present.
2. Compare those facts with `overrides.json` and `project-details.ts`. Update the
   tagline, description, technology list, highlights, diagram, or SEO copy only
   when the repository changed enough to make the existing text stale.
3. Run `pnpm generate`. Confirm the project has the expected repository URL,
   last-commit date, and plausible metrics. If local databases, downloaded
   models, or other ignored artifacts inflate the size, set a tracked-file
   metric override instead of publishing the working-directory size.
4. Run `pnpm check` and `pnpm build`.

## Workflow for a new repository

1. Inspect `D:\development\<slug>` using the same sources listed above.
2. Add a curated entry to `overrides.json`. Choose its tier from the existing
   catalogue rather than defaulting every new project to featured.
3. Add a specific entry to `project-details.ts`; do not rely on the generic
   diagram for a project that has enough information to describe properly.
4. Run the generation and validation steps from the existing-project workflow.
5. If the repository has no `origin`, leave its repository link empty and report
   that fact. Once an origin exists, regenerate so the URL appears automatically.

## Scope and publishing

Do not edit application components for a content-only refresh. Do not commit or
push unless the user asks. When they do, stage only the portfolio files changed
for this update; local settings such as `.claude/settings.local.json` stay out of
the commit.

