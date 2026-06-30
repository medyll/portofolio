<script lang="ts">
  import data from '$lib/data/projects.json';
  import type { ProjectsData, Tier } from '$lib/types';

  const { projects } = data as ProjectsData;

  const tiers: { key: Tier; label: string }[] = [
    { key: 'A', label: 'Featured' },
    { key: 'B', label: 'Libraries & tools' },
    { key: 'C', label: 'Other work' }
  ];

  function byTier(t: Tier) {
    return projects.filter((p) => p.tier === t);
  }
</script>

<svelte:head>
  <title>medyll · portfolio</title>
</svelte:head>

<section class="hero">
  <h1>Lead Developer Fullstack</h1>
  <p class="lead">
    I build frameworks and use others.
    <br />
    Case studies across TypeScript, Svelte 5, Rust, Go, Python and AI tooling — exploration over finished product.
  </p>
</section>

{#each tiers as tier}
  {@const items = byTier(tier.key)}
  {#if items.length}
    <section class="section">
      <h2>{tier.label}</h2>
      <hr class="rule" />

      <ul class="grid" role="list">
        {#each items as p}
          <li>
            <a
              class="card"
              href={p.repo ?? '#'}
              target="_blank"
              rel="noreferrer"
              data-featured={p.featured}
            >
              {#if p.accent}
                <span class="accent">{p.accent}</span>
              {/if}

              <div class="title-row">
                <h3>{p.name}</h3>
                {#if p.lastCommit}
                  <span class="date">{p.lastCommit}</span>
                {/if}
              </div>

              <p class="tagline">{p.tagline}</p>

              {#if p.highlights.length}
                <ul class="highlights">
                  {#each p.highlights as h}
                    <li>· {h}</li>
                  {/each}
                </ul>
              {/if}

              {#if p.tech.length}
                <div class="tags">
                  {#each p.tech as t}
                    <span class="tag">{t}</span>
                  {/each}
                </div>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </section>
  {/if}
{/each}
