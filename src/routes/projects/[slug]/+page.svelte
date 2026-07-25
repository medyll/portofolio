<script lang="ts">
  import Mermaid from '$lib/components/Mermaid.svelte';
  import { base } from '$app/paths';

  let { data } = $props();
  let project = $derived(data.project);
  let mermaid = $derived(data.mermaid);
  let seo = $derived(data.seo);
  let parent = $derived(data.parent);
  let children = $derived(data.children);
</script>

<svelte:head>
  <title>{project.name} · medyll</title>
  <meta name="description" content={seo ?? project.tagline} />
</svelte:head>

<a class="back" href="{base}/">&larr; all projects</a>

{#if parent || children.length}
  <nav class="crumbs" aria-label="Repo hierarchy">
    {#if parent}
      <a href="{base}/projects/{parent.slug}">{parent.name}</a>
      <span class="sep">/</span>
    {/if}
    <span class="current">{project.name}</span>
    {#if children.length}
      <span class="sep">/</span>
      {#each children as c, i}
        <a href="{base}/projects/{c.slug}">{c.name}</a>{#if i < children.length - 1}<span class="sep">,</span>{/if}
      {/each}
    {/if}
  </nav>
{/if}

<section class="hero">
  {#if project.accent}
    <span class="accent">{project.accent}</span>
  {/if}
  <h1>{project.name}</h1>
  <p class="lead">{project.tagline}</p>
</section>

{#if seo}
  <p class="seo">{seo}</p>
{/if}

<section class="section">
  <h2>Where it sits</h2>
  <hr class="rule" />
  <Mermaid code={mermaid} />
</section>

{#if project.description}
  <section class="section">
    <h2>Overview</h2>
    <hr class="rule" />
    <p class="description">{project.description}</p>
  </section>
{/if}

{#if project.highlights.length}
  <section class="section">
    <h2>Highlights</h2>
    <hr class="rule" />
    <ul class="highlights">
      {#each project.highlights as h}
        <li>&middot; {h}</li>
      {/each}
    </ul>
  </section>
{/if}

<section class="section meta-row">
  {#if project.tech.length}
    <div class="tags">
      {#each project.tech as t}
        <span class="tag">{t}</span>
      {/each}
    </div>
  {/if}
  {#if project.repo}
    <a class="repo-link" href={project.repo} target="_blank" rel="noreferrer">View source &rarr;</a>
  {/if}
</section>

<style>
  .back {
    display: inline-block;
    margin-top: var(--gap-md);
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.875rem;
  }
  .back:hover {
    color: var(--primary);
  }

  .crumbs {
    margin-top: var(--gap-sm);
    font-size: 0.8125rem;
    color: var(--text-muted);
  }
  .crumbs a {
    text-decoration: none;
    color: var(--primary);
  }
  .crumbs a:hover {
    text-decoration: underline;
  }
  .crumbs .sep {
    margin: 0 0.375rem;
  }
  .crumbs .current {
    font-weight: 600;
    color: var(--text);
  }

  .hero {
    padding-block: 1.5rem 1rem;
  }
  .hero h1 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    margin-top: 0.25rem;
  }
  .accent {
    color: var(--primary);
    font-size: 0.8125rem;
    font-weight: 600;
    font-family: var(--mono);
  }
  .lead {
    color: var(--text-muted);
    font-size: 1.0625rem;
    margin-top: var(--gap-sm);
  }

  .seo {
    max-width: 68ch;
    color: var(--text);
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .description {
    color: var(--text-muted);
    font-size: 0.9375rem;
    max-width: 68ch;
  }

  .highlights {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);
    font-size: 0.9375rem;
  }

  .meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--gap-md);
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-xs);
  }
  .tag {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    background: var(--primary-soft);
    color: var(--primary);
  }
  .repo-link {
    color: var(--primary);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .repo-link:hover {
    text-decoration: underline;
  }
</style>
