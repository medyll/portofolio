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
    mermaid: `flowchart TD
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
  S --> A["OKLCH color space"]
  S --> B["CSS @function + attr() coercion"]
  S --> C["published on npm, zero build"]`,
    seo: 'css-base is a design system written in plain CSS: OKLCH colors, native @function, and attr() type coercion replace what a preprocessor or JS runtime would otherwise do. No build step, published and used in production.'
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
  S --> A["5-level trace decay"]
  S --> B["recall reinforces memory strength"]
  S --> C["zero runtime dependencies"]`,
    seo: 'humemory models an AI agent’s memory on human forgetting curves: traces decay across five levels, and recall events reinforce them. It surfaces relevant context proactively, with no runtime dependencies.'
  },
  domus: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["domus"]
  S --> A["reactive UI framework, Rust"]
  S --> B["web target: WASM"]
  S --> C["native desktop target"]`,
    seo: 'domus is a reactive UI framework written in Rust, compiling to WASM for the web and to native binaries for desktop, with zero JavaScript in the runtime path. Currently alpha (v0.1.0).'
  },
  wollama: {
    mermaid: `flowchart TD
  P["idea / needs"] --> S["wollama"]
  S --> A["Ollama: local inference, no cloud"]
  S --> B["web + Electron + Capacitor"]
  S --> C["voice I/O, RxDB<->PouchDB sync"]
  S --> D["hooks system + web-search agents"]`,
    seo: 'wollama is a local-first AI chat client for Ollama, shipping the same codebase to the browser, Electron desktop, and mobile via Capacitor. Voice input/output, offline sync, and a hooks system round out the runtime.'
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
  S --> C["Dockerized dev env, original UI intact"]`,
    seo: 'Idae Legacy is a live migration of a 2014 PHP/Node.js/MongoDB CMS onto PHP 8.2 and a current MongoDB driver, kept running in production with its original UI and behavior unchanged during the rewrite.'
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
