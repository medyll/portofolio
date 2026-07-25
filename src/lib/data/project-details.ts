// Per-project detail-page content: repo/sub-repo nav relations, a real
// architecture/data-flow diagram (what actually happens at runtime, not a
// "portfolio owns this" ownership tree), and a short SEO paragraph distinct
// from the homepage card copy.
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
    children: ['qoolie', 'idae.api.lan'],
    mermaid: `flowchart LR
  M["idae-machine · SvelteKit app"] --> Q["idae-query · MongoDB-like engine"]
  M --> T["idae-socket / idae-stator · sync + state"]
  M -. sub-repo .-> C1["qoolie · client IndexedDB"]
  M -. sub-repo .-> C2["idae.api · PHP/MongoDB REST"]
  C1 <-- sync --> T
  C2 <-- REST/IDQL --> Q`,
    seo: 'Idae is a domain-driven, multi-tenant monorepo built around a MongoDB-like query engine (idae-query), a real-time sync layer (idae-socket, idae-stator), and a SvelteKit front end (idae-machine). Two of its packages, qoolie and idae.api, ship as standalone projects below.'
  },
  qoolie: {
    parent: 'idae',
    mermaid: `flowchart LR
  A["app code (React/Vue/Svelte)"] --> Q["qoolie API"]
  Q --> I["IndexedDB (browser)"]
  Q <-- sync --> S["idae-socket transport"]
  Q --> D["devtools / CLI / benchmarks"]`,
    seo: 'Qoolie wraps IndexedDB behind a simple client-side API, with adapters for React, Vue, and Svelte plus optional server sync over idae-socket. Built as an offline-first data layer for the Idae platform, published independently on npm.'
  },
  'idae.api.lan': {
    parent: 'idae',
    mermaid: `flowchart LR
  H["HTTP request"] --> R["router"]
  R --> P["API parser"]
  P --> QL["query layer"]
  QL --> IDQL["IDQL: find / group / distinct / parallel"]
  QL --> DB["MongoDB"]
  N["Node helper"] --> SK["sockets"]
  N --> CR["crons"]`,
    seo: 'idae.api is the PHP/MongoDB backend for Idae: a router-parser-query pipeline exposing both plain REST and IDQL, its own query language for find, group, distinct, and parallel operations. Ships Dockerized with a PHPUnit suite and a small Node process for sockets and crons.'
  },
  'css-base': {
    mermaid: `flowchart LR
  H["HTML markup + data attributes"] --> T["tokens: OKLCH, @function, attr() coercion"]
  T --> R["rendered UI, light/dark via light-dark()"]
  R -. no JS, no build .-> H`,
    seo: 'css-base is a design system written in plain CSS: OKLCH colors, native @function, and attr() type coercion replace what a preprocessor or JS runtime would otherwise do. No build step, published and used in production.'
  },
  sive: {
    mermaid: `flowchart LR
  U["writer types"] --> E["editor"]
  E --> AI["AI suggestion engine"]
  AI --> C["narrative coherence check"]
  C --> E`,
    seo: 'sive is a distraction-free writing app with an AI layer that checks narrative coherence and suggests edits as you type. Built on SvelteKit 5 and Tailwind v4, in production since v1.0.'
  },
  'latent-line': {
    mermaid: `flowchart LR
  A["story assets"] --> TL["timeline editor"]
  TL --> MI["model inspection (live)"]
  MI --> TL
  TL -. on push .-> CI["GitHub Actions CI"]`,
    seo: 'latent-line orchestrates AI-driven scene and story production through an interactive timeline editor, with live inspection of the underlying models and a CI pipeline running on GitHub Actions.'
  },
  humemory: {
    mermaid: `flowchart LR
  E["agent event"] --> M["memory trace, decay level 1-5"]
  M --> R["recall"]
  R --> M2["trace reinforced"]
  M --> S["context resurfaced before you ask"]`,
    seo: 'humemory models an AI agent’s memory on human forgetting curves: traces decay across five levels, and recall events reinforce them. It surfaces relevant context proactively, with no runtime dependencies.'
  },
  domus: {
    mermaid: `flowchart LR
  C["Rust component tree"] --> R["reactive core"]
  R --> W["WASM target (web)"]
  R --> D["native binary (desktop)"]`,
    seo: 'domus is a reactive UI framework written in Rust, compiling to WASM for the web and to native binaries for desktop, with zero JavaScript in the runtime path. Currently alpha (v0.1.0).'
  },
  wollama: {
    mermaid: `flowchart LR
  U["user: text or voice"] --> STT["STT (voice only)"]
  STT --> O["Ollama, local inference"]
  U --> O
  O --> TTS["TTS"]
  O --> UI["web / Electron / mobile UI"]
  UI <-- sync --> RX["RxDB <-> PouchDB"]`,
    seo: 'wollama is a local-first AI chat client for Ollama, shipping the same codebase to the browser, Electron desktop, and mobile via Capacitor. Voice input/output, offline sync, and a hooks system round out the runtime.'
  },
  'svelte-5-documentor': {
    mermaid: `flowchart LR
  S["Svelte 5 source"] --> P["AST parser (no compiler)"]
  P --> E["props, exports, generics, JSDoc"]
  E --> D["structured docs"]`,
    seo: 'svelte-5-documentor reads Svelte 5 components as AST and extracts props, exports, generics, and JSDoc without running the compiler, producing structured docs any TypeScript toolchain can consume.'
  },
  'pseudo-html-stack': {
    mermaid: `flowchart LR
  H["custom tags + display-hint suffixes"] --> R["vanilla runtime, no build"]
  R --> A["accessible DOM, WCAG 2.2 AA"]`,
    seo: 'pseudo-stack is a vanilla HTML component system: a structured tag taxonomy and display-hint suffixes replace a framework, with WCAG 2.2 AA accessibility built in, at 7.7 KB gzip and no build step.'
  },
  protonesk: {
    mermaid: `flowchart LR
  C["standard mail client"] --> P["Protonesk MCP: IMAP/SMTP/CardDAV"]
  P --> H["hydroxide"]
  H --> PM["ProtonMail, encrypted"]`,
    seo: 'Protonesk is an MCP server that exposes ProtonMail over IMAP, SMTP, and CardDAV via hydroxide, so any standard mail client can use an encrypted ProtonMail account. Ships with Windows auto-start.'
  },
  jobber: {
    mermaid: `flowchart LR
  I["resume + job description"] --> O["Ollama, local rewrite"]
  O --> PDF["ATS-friendly PDF"]
  PDF --> PW["Playwright autofill"]
  PW --> A["application submitted"]`,
    seo: 'jobber matches a resume against a job description, rewrites the relevant sections locally via Ollama, renders an ATS-friendly PDF, and fills the application form with Playwright — no cloud, no subscription.'
  },
  'singleton-notepad': {
    mermaid: `flowchart LR
  K["keystrokes"] --> B["in-memory buffer"]
  B -- every 2s --> F["single Markdown file"]
  F -. optional .-> L["LLM normalization pass"]
  L --> F`,
    seo: 'SingletonNotepad is a WinUI 3 notepad for Windows 11 that persists everything to one Markdown file, auto-saving every two seconds, with an optional LLM pass to keep notes structured.'
  },
  'registry-mind': {
    mermaid: `flowchart LR
  K["Snap Key trigger"] --> C["screen capture"]
  C --> OCR["on-device OCR, ML Kit"]
  OCR --> T["Tailscale sync"]
  T --> D["OpenClaw desktop instance"]`,
    seo: 'Registry Mind captures screen text on an Oppo Find X9 via on-device ML Kit OCR and syncs results to a desktop OpenClaw instance over Tailscale, replacing Oppo’s proprietary AI Mind Space with a self-hosted pipeline.'
  },
  'idae-legacy': {
    mermaid: `flowchart LR
  R["incoming request"] --> L["legacy PHP 5.6 path (shrinking)"]
  R --> N["PHP 8.2 path (growing)"]
  L --> M["modern MongoDB driver"]
  N --> M
  M --> U["same original UI, unchanged"]`,
    seo: 'Idae Legacy is a live migration of a 2014 PHP/Node.js/MongoDB CMS onto PHP 8.2 and a current MongoDB driver, kept running in production with its original UI and behavior unchanged during the rewrite.'
  },
  'ferule-core': {
    mermaid: `flowchart LR
  D["org / cognition description"] --> MT["matrix topology encoding"]
  D --> SM["structural mapping model"]
  MT --> LLM["LLM indicator engine, 9 domains"]
  SM --> LLM
  LLM --> V["3D semantic cloud, Three.js"]`,
    seo: 'Ferule-Core is a research project defining two formal languages for cognition and organizational structure, paired with an LLM engine that generates context-aware indicators across nine domains and an interactive 3D semantic-cloud visualization.'
  }
};

export function defaultMermaid(name: string, highlights: string[]): string {
  const label = name.replace(/"/g, "'");
  const nodes = highlights
    .slice(0, 3)
    .map((h, i) => `  S --> H${i}["${h.replace(/"/g, "'")}"]`)
    .join('\n');
  return `flowchart LR\n  S["${label}"]\n${nodes}`;
}
