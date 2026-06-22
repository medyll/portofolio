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
  <title>medyll — portfolio</title>
</svelte:head>

<section class="hero">
  <h1>Full-stack developer</h1>
  <p class="lead text-muted" data-text="lg">
    I build frameworks. That's almost work.
    <br />
    AI tooling and apps across TypeScript / Svelte 5, Rust and Go. Selected projects below.
  </p>
</section>

{#each tiers as tier}
  {@const items = byTier(tier.key)}
  {#if items.length}
    <section>
      <div class="section-header">
        <h2 class="text-xl font-semibold">{tier.label}</h2>
      </div>
      <hr class="tier-rule" />

      <ul class="list list-grid" role="list" style="--list-grid-min: 280px;">
        {#each items as p}
          <li>
            <a
              class="card project"
              href={p.repo ?? '#'}
              target="_blank"
              rel="noreferrer"
              data-pad="lg"
              data-radius="lg"
              data-featured={p.featured}
            >
              {#if p.accent}
                <span class="project-accent">{p.accent}</span>
              {/if}

              <div class="project-title-row">
                <h3 class="text-lg font-semibold">{p.name}</h3>
                {#if p.lastCommit}
                  <span class="text-muted text-xs tabular-nums">{p.lastCommit}</span>
                {/if}
              </div>

              <p class="text-muted text-sm">{p.tagline}</p>

              {#if p.highlights.length}
                <ul class="list" role="list" style="margin: var(--marg-xs) 0 0; padding: 0;">
                  {#each p.highlights as h}
                    <li class="text-sm" style="list-style: none;">— {h}</li>
                  {/each}
                </ul>
              {/if}

              {#if p.tech.length}
                <div class="tech-tags">
                  {#each p.tech as t}
                    <span class="badge badge-primary">{t}</span>
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
