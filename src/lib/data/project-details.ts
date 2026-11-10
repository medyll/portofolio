// Per-project detail-page content: repo/sub-repo nav relations, a hierarchy
// diagram (brain-caster style: parent system -> subject -> output/consumers),
// and a short SEO paragraph distinct from the homepage card copy.
// Not scanned by generate-projects.mjs — hand-authored, kept next to the
// route that renders it (src/routes/projects/[slug]).

export interface ProjectDetail {
  parent?: string;
  children?: string[];
  mermaid: string;
  seo: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  idae: {
    children: ['qoolie', 'idae.api.lan', 'idae-be', 'idae-dom-events', 'idae-router', 'idae-stator', 'idae-sync'],
    mermaid: `flowchart LR
  P["idea / needs"] --> S["Idae — DDD monorepo"]
  S --> Q["idae-machine · multi-tenant app"]
  S --> R["idae-query · MongoDB-like engine"]
  S --> T["idae-socket / idae-stator · sync + state"]
  S -. sub-repo .-> C1["qoolie · client IndexedDB + sync"]
  S -. sub-repo .-> C2["idae.api · PHP/MongoDB REST + IDQL"]
  S -. sub-repo .-> C3["idae-be · DOM manipulation"]
  S -. sub-repo .-> C4["idae-dom-events · CSS/DOM observers"]
  S -. sub-repo .-> C5["idae-router · SPA router + SWR cache"]
  S -. sub-repo .-> C6["idae-stator · reactive Proxy state"]
  S -. sub-repo .-> C7["idae-sync · offline outbox sync"]`,
    seo: 'Idae is a domain-driven, multi-tenant monorepo built around a MongoDB-like query engine (idae-query), a real-time sync layer (idae-socket, idae-stator), and a SvelteKit front end (idae-machine). Seven of its packages — qoolie, idae.api, idae-be, idae-dom-events, idae-router, idae-stator and idae-sync — ship as standalone projects below.'
  },
  qoolie: {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["qoolie · IndexedDB client"]
  S --> A["React / Vue / Svelte adapters"]
  S --> B["idae-socket · sync transport"]
  S --> D["devtools + CLI + benchmarks"]`,
    seo: 'Qoolie wraps IndexedDB behind a simple client-side API, with adapters for React, Vue, and Svelte plus optional server sync over idae-socket. Built as an offline-first data layer for the Idae platform, published independently on npm.'
  },
  'idae.api.lan': {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["idae.api · PHP REST"]
  S --> A["router -> API parser -> query layer"]
  A --> Q["IDQL: find / group / distinct / parallel"]
  S --> D["Docker + PHPUnit + Node helper (sockets, crons)"]`,
    seo: 'idae.api is the PHP/MongoDB backend for Idae: a router-parser-query pipeline exposing both plain REST and IDQL, its own query language for find, group, distinct, and parallel operations. Ships Dockerized with a PHPUnit suite and a small Node process for sockets and crons.'
  },
  'css-base': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["@medyll/css-base"]
  S --> A["tokens · OKLCH · light-dark()"]
  S --> B["components · utilities · typed attr()"]
  S --> C["modular npm exports · zero build"]
  S --> D["10 token-only demo skins"]`,
    seo: 'css-base is a modular design system written in plain CSS. Version 0.7.13 combines cascade layers, OKLCH colors, native light-dark(), CSS @function, and typed attr() utilities without a preprocessor or JavaScript runtime, and demonstrates its token architecture through ten interchangeable skins.'
  },
  sive: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["sive"]
  S --> A["real-time AI suggestions"]
  S --> B["narrative coherence analysis"]
  S --> C["mobile-first editor, SvelteKit 5"]`,
    seo: 'sive is a distraction-free writing app with an AI layer that checks narrative coherence and suggests edits as you type. Built on SvelteKit 5 and Tailwind v4, in production since v1.0.'
  },
  'latent-line': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["latent-line"]
  S --> A["interactive timeline editor"]
  S --> B["asset management"]
  S --> C["real-time model inspection"]
  S --> D["CI on GitHub Actions"]`,
    seo: 'latent-line orchestrates AI-driven scene and story production through an interactive timeline editor, with live inspection of the underlying models and a CI pipeline running on GitHub Actions.'
  },
  humemory: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["humemory"]
  S --> A["retrospective · decay + lexical/vector retrieval"]
  S --> B["prospective · cues + open loops"]
  S --> C["trusted shared memory · MCP + provenance"]
  S --> D["off-path maintenance · deterministic fallback"]
  D --> E["dreaming + reviewed cognitive scripts"]`,
    seo: 'humemory gives Claude, Codex, Kimi Code and OpenCode a shared SQLite memory that behaves less like a log and more like recall. Decaying traces, lexical and vector retrieval, prospective cues and reviewed cognitive scripts work offline; JEV can shadow-qualify candidate routines, while optional model-assisted maintenance runs outside the agent path.'
  },
  'acp-team': {
    mermaid: `flowchart TD
  H["MCP host"] --> S["acp-team"]
  S --> K["Kimi · ACP / JSON-RPC"]
  S --> C["Codex · codex exec / JSONL"]
  S --> O["OpenCode · host plugin"]
  S --> L["Ollama · local HTTP"]
  K --> R["sessions · progress · cancellation · usage"]
  C --> R
  O --> R
  L --> R
  R --> A["scoped authorization for writes"]`,
    seo: 'acp-team lets an MCP host delegate work to bundled Kimi, Codex, OpenCode and Ollama adapters through one contract. It normalizes sessions, live progress, cancellation, usage and results across ACP, CLI and HTTP transports; JEV can evaluate routing choices in shadow mode, while time-limited authorization tokens constrain write-capable runs by agent, directory, mode and use count.'
  },
  mailboard: {
    mermaid: `flowchart TD
  C["CLI · JavaScript/TypeScript API"] --> S["Mailboard services"]
  A["MCP host"] --> P["stdio MCP tools + settings resource"]
  P --> S
  M["Gmail connector · browser collector"] --> R["collection runs"]
  B["Proton Mail Bridge · read-only IMAP"] --> R
  S --> O["cycle orchestrator"]
  O --> I["ingest runs · deduplicate · optional JEV"]
  R --> I
  I --> J["append-only JSONL store"]
  S --> Q["message search · body backfill queries"]
  J --> Q
  J --> D["searchable dashboard: file or localhost"]
  S --> E["JEV backfill · human-label agreement"]
  E --> J
  O --> N["notification decision"]`,
    seo: 'Mailboard collects job-related messages from Gmail connectors, browser mail and Proton Mail Bridge. The Proton collector reads mail over IMAP and feeds the same append-only JSONL store as the other sources. The @medyll/jobmailboard CLI, JavaScript/TypeScript API and stdio MCP server share search, ingestion and notification services. The dashboard opens directly from disk, and optional JEV enrichment can re-evaluate stored messages against human labels.'
  },
  randos: {
    mermaid: `flowchart TD
  R["Route data · GPS geometry"] --> C["Static hiking catalogue"]
  E["Valley event data"] --> C
  C --> F["Route filters · shareable URL"]
  F --> D["Route details · GPS trace and elevation profile"]
  C --> A["Valley events by day or week"]
  D --> M["Leaflet map"]
  T["Online OpenStreetMap tiles"] --> M`,
    seo: 'Randos is a static hiking catalogue for the Alpes-Maritimes with 221 day hikes and multi-day routes. Search by route name or filter by valley, elevation gain and landmarks, then check the event calendar for the selected day or week. Route details include locally stored GPS traces and elevation profiles, with an interactive Leaflet map that loads its background tiles from OpenStreetMap.'
  },
  domus: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["domus"]
  S --> A["signals · effects · RSX · scoped CSS"]
  S --> B["web: WASM + reusable components"]
  S --> C["desktop: native webviews, no Tauri"]
  C --> D["CLI scaffolding + portable bundles"]`,
    seo: 'Domus is an alpha Rust UI framework with fine-grained signals, RSX, routing, context, scoped CSS and reusable WebAssembly components. Its independent desktop runtime uses native webviews without Tauri, and its CLI scaffolds projects and packages portable desktop applications.'
  },
  wollama: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["wollama"]
  S --> A["Model provider registry"]
  A --> O["Ollama · default local inference"]
  A --> L["Codex · Claude Code · Kimi Code CLI text chat"]
  S --> B["web + Electron + Capacitor"]
  S --> C["offline RxDB <-> PouchDB sync"]
  S --> D["voice · RAG · skills · hooks · web agents"]`,
    seo: 'Wollama runs on the web, on Electron desktop and on Capacitor mobile. It uses Ollama by default for local inference, voice and retrieval features. For text chat, its server can also call installed Codex, Claude Code or Kimi Code CLIs using their existing sign-ins. Conversations and companions remain accessible offline and sync through RxDB and PouchDB.'
  },
  'svelte-5-documentor': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["svelte-5-documentor"]
  S --> A["AST parse, no compiler invocation"]
  S --> B["props, exports, generics, JSDoc"]
  S --> C["drop-in for TS toolchains"]`,
    seo: 'svelte-5-documentor reads Svelte 5 components as AST and extracts props, exports, generics, and JSDoc without running the compiler, producing structured docs any TypeScript toolchain can consume.'
  },
  'pseudo-html-stack': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["pseudo-stack"]
  S --> A["tag taxonomy + display-hint suffixes"]
  S --> B["WCAG 2.2 AA by default"]
  S --> C["7.7 KB gzip, zero dependencies"]`,
    seo: 'pseudo-stack is a vanilla HTML component system: a structured tag taxonomy and display-hint suffixes replace a framework, with WCAG 2.2 AA accessibility built in, at 7.7 KB gzip and no build step.'
  },
  protonesk: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["Protonesk"]
  S --> A["hydroxide bridge"]
  S --> B["IMAP / SMTP / CardDAV"]
  S --> C["Windows auto-start, zero-config"]`,
    seo: 'Protonesk is an MCP server that exposes ProtonMail over IMAP, SMTP, and CardDAV via hydroxide, so any standard mail client can use an encrypted ProtonMail account. Ships with Windows auto-start.'
  },
  jobber: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["jobber"]
  S --> A["Ollama: local resume rewrite"]
  S --> B["ATS-friendly PDF output"]
  S --> C["Playwright autofill"]`,
    seo: 'jobber matches a resume against a job description, rewrites the relevant sections locally via Ollama, renders an ATS-friendly PDF, and fills the application form with Playwright — no cloud, no subscription.'
  },
  'singleton-notepad': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["SingletonNotepad"]
  S --> A["single Markdown file, no database"]
  S --> B["2-second auto-save"]
  S --> C["optional LLM normalization"]`,
    seo: 'SingletonNotepad is a WinUI 3 notepad for Windows 11 that persists everything to one Markdown file, auto-saving every two seconds, with an optional LLM pass to keep notes structured.'
  },
  'registry-mind': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["Registry Mind"]
  S --> A["on-device OCR, ML Kit"]
  S --> B["sync over Tailscale"]
  S --> C["OpenClaw desktop instance"]`,
    seo: 'Registry Mind captures screen text on an Oppo Find X9 via on-device ML Kit OCR and syncs results to a desktop OpenClaw instance over Tailscale, replacing Oppo’s proprietary AI Mind Space with a self-hosted pipeline.'
  },
  'idae-legacy': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["Idae Legacy"]
  S --> A["PHP 5.6 -> PHP 8.2"]
  S --> B["modern MongoDB driver"]
  S --> C["Phase 2 · CRUD + sessions + database internals"]
  S --> D["one supervised image · Apache/PHP + Socket.IO"]
  S --> E["CI · Smarty rendering and isolated MongoDB"]`,
    seo: 'Idae Legacy migrates a 2014 PHP, Node.js and MongoDB CMS to PHP 8.2 and a current MongoDB driver while preserving the original interface. The project updates Smarty templates and checks rendering and aggregation behavior in CI against an isolated MongoDB instance. Apache/PHP and Socket.IO run together in a supervised Docker image.'
  },
  'idae-be': {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["idae-be · DOM manipulation"]
  S --> A["be() always returns root object"]
  S --> B["callback-based targeting of nested matches"]
  S --> C["traversal, styles, attrs, events, timers, HTTP"]`,
    seo: 'idae-be is a callback-based DOM manipulation library for the Idae ecosystem. Unlike jQuery-style chaining, every call returns the root Be instance, and callbacks reach into nested targets for precise, composable DOM operations.'
  },
  'idae-dom-events': {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["idae-dom-events"]
  S --> A["cssDom · animation/style/resize tracking"]
  S --> B["htmlDom.track · MutationObserver wrapper"]
  S --> C["callback-based change reporting"]`,
    seo: 'idae-dom-events observes CSS and DOM changes for the Idae stack: cssDom tracks style, animation and resize events on selected elements, while htmlDom.track wraps MutationObserver for attribute, child-list and character-data changes.'
  },
  'idae-router': {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["idae-router"]
  S --> A["path params, query parsing, nested outlets"]
  S --> B["declarative http/http_source fetching"]
  S --> C["in-memory SWR cache + hover prefetch"]`,
    seo: 'idae-router is a framework-agnostic SPA router used across Idae projects: path parameters, lifecycle hooks, declarative HTTP data fetching into route context, and an in-memory stale-while-revalidate cache with hover-triggered prefetching.'
  },
  'idae-stator': {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["idae-stator"]
  S --> A["native Proxy, tracks any-depth mutations"]
  S --> B["onchange callback + EventTarget API"]
  S --> C["isomorphic: browser, Node.js, SSR"]`,
    seo: 'idae-stator is the reactive state layer shared across Idae projects: a recursive Proxy tracks mutations at any depth in objects and arrays, exposing both a plain onchange callback and a standard EventTarget API, with zero dependencies.'
  },
  'idae-sync': {
    parent: 'idae',
    mermaid: `flowchart TD
  P["Idae monorepo"] --> S["idae-sync"]
  S --> A["IndexedDB outbox · retries + backoff"]
  S --> B["circuit breaker + dead letter queue"]
  S --> C["mobile-first / server-first per collection"]
  S --> D["SSE/WebSocket push + conflict resolution"]`,
    seo: 'idae-sync syncs local IndexedDB data to a server in the background, even offline. Writes queue in a persistent outbox with exponential backoff, per-collection circuit breakers, a dead letter queue, and pluggable conflict resolution, plus SSE/WebSocket listeners for server push.'
  },
  'infra-ansible-legacy': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["infra-ansible-legacy"]
  S --> A["common role: PHP7, Nginx, MySQL, Redis"]
  S --> B["group_vars / host_vars per environment"]
  S --> C["dev / preprod / prod, same role unmodified"]`,
    seo: 'infra-ansible-legacy is a 2019 Ansible playbook that provisioned a telco API platform (PHP7, Nginx, MySQL, Redis) across dev, preprod and prod. Environment identity lives entirely in group_vars/host_vars, keeping the common role environment-agnostic. Archived as a portfolio reference with credentials stripped to vault placeholders.'
  },
  'ferule-core': {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["Ferule-Core"]
  S --> A["matrix topology language"]
  S --> B["dynamic structural mapping model"]
  S --> C["LLM indicators across 9 domains"]
  S --> D["3D semantic cloud, Three.js"]`,
    seo: 'Ferule-Core is a research project defining two formal languages for cognition and organizational structure, paired with an LLM engine that generates context-aware indicators across nine domains and an interactive 3D semantic-cloud visualization.'
  }
};

export function defaultMermaid(name: string, highlights: string[]): string {
  const nodes = highlights
    .slice(0, 3)
    .map((h, i) => `  S --> H${i}["${h.replace(/"/g, "'")}"]`)
    .join('\n');
  return `flowchart TD\n  P["idea / needs"] --> S["${name.replace(/"/g, "'")}"]\n${nodes}`;
}
