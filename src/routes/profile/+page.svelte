<script lang="ts">
  import { summary, skills, techSkills, recentActivities, timeline, languages, interests } from './data';
</script>

<svelte:head>
  <title>Profile · medyll</title>
  <meta name="description" content={summary} />
</svelte:head>

<section class="hero">
  <h1>Meddy Lebrun</h1>
  <p class="lead">Senior Fullstack Lead Developer</p>
  <p class="anon-banner">
    <strong>Note:</strong> company and client names on this page are anonymized (fictitious names) — sector and domain are real.
  </p>
</section>

<section class="section">
  <h2>Profile</h2>
  <hr class="rule" />
  <p class="description">{summary}</p>
</section>

<section class="section">
  <h2>Skills</h2>
  <hr class="rule" />
  <dl class="skill-list">
    {#each skills as s}
      <div class="skill-row">
        <dt>{s.label}</dt>
        <dd>{s.value}</dd>
      </div>
    {/each}
  </dl>
</section>

<section class="section">
  <h2>Technical proficiency</h2>
  <hr class="rule" />
  <div class="tech-grid">
    {#each techSkills as t}
      <div class="tech-item">
        <div class="tech-label">{t.label}</div>
        <div class="tech-bar"><div class="tech-fill" style="width:{t.level}%"></div></div>
        <div class="tech-value">{t.value}</div>
      </div>
    {/each}
  </div>
</section>

<section class="section">
  <h2>Recently explored</h2>
  <hr class="rule" />
  <ul class="highlights">
    {#each recentActivities as a}
      <li>&middot; {a}</li>
    {/each}
  </ul>
</section>

<section class="section">
  <h2>Experience</h2>
  <hr class="rule" />
  <p class="note">
    See the
    <a href="https://github.com/medyll/portofolio/blob/main/src/routes/profile/data.fr-archive.md" target="_blank" rel="noreferrer">French archive</a>
    for the original source.
  </p>

  <ol class="timeline">
    {#each timeline as t}
      <li class="entry">
        <div class="entry-header">
          <div>
            <h3>{t.role}</h3>
            <div class="entry-company">{t.company}</div>
            {#if t.sector}<div class="entry-sector">{t.sector}</div>{/if}
          </div>
          <div class="entry-side">
            <span class="entry-date">{t.date}</span>
            <span class="entry-domain">{t.domain}</span>
          </div>
        </div>
        <ul class="entry-points">
          {#each t.points as p}
            <li>{p}</li>
          {/each}
        </ul>
        <div class="entry-env"><strong>Env:</strong> {t.env.join(', ')}</div>
      </li>
    {/each}
  </ol>
</section>

<section class="section meta-row">
  <div class="plain">
    <strong>Languages</strong>
    <span>{languages}</span>
  </div>
  <div class="plain">
    <strong>Interests</strong>
    <span>{interests}</span>
  </div>
</section>

<style>
  .hero {
    padding-block: 1.5rem 1rem;
  }
  .hero h1 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
  }
  .lead {
    color: var(--text-muted);
    font-size: 1.0625rem;
    margin-top: var(--gap-sm);
  }
  .anon-banner {
    margin-top: var(--gap-md);
    padding: var(--gap-sm) var(--gap-md);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface-hover);
    color: var(--text-muted);
    font-size: 0.8125rem;
    max-width: 68ch;
  }
  .anon-banner strong {
    color: var(--text);
  }

  .section {
    margin-top: var(--gap-xl);
  }
  .rule {
    border: none;
    border-top: 1px solid var(--border);
    margin: var(--gap-sm) 0 var(--gap-md);
  }

  .description {
    color: var(--text-muted);
    font-size: 0.9375rem;
    max-width: 68ch;
  }

  .skill-list {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);
    margin: 0;
  }
  .skill-row {
    display: flex;
    gap: var(--gap-md);
    font-size: 0.9375rem;
  }
  .skill-row dt {
    flex: 0 0 190px;
    font-weight: 600;
    color: var(--primary);
  }
  .skill-row dd {
    margin: 0;
    color: var(--text-muted);
  }

  .tech-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-lg) var(--gap-xl);
  }
  @media (max-width: 640px) {
    .tech-grid {
      grid-template-columns: 1fr;
    }
    .skill-row {
      flex-direction: column;
      gap: var(--gap-xs);
    }
    .skill-row dt {
      flex: none;
    }
  }
  .tech-label {
    font-weight: 600;
    margin-bottom: var(--gap-xs);
  }
  .tech-bar {
    height: 5px;
    border-radius: 3px;
    background: var(--border);
    overflow: hidden;
    margin-bottom: var(--gap-xs);
  }
  .tech-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 3px;
  }
  .tech-value {
    font-size: 0.8125rem;
    color: var(--text-muted);
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

  .note {
    font-size: 0.8125rem;
    color: var(--text-muted);
    margin-bottom: var(--gap-md);
  }
  .note a {
    color: var(--primary);
  }

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
  }
  .entry {
    padding-block-start: var(--gap-sm);
    border-top: 1px solid var(--border);
  }
  .entry:first-child {
    border-top: none;
    padding-block-start: 0;
  }
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--gap-md);
  }
  .entry-header h3 {
    font-size: 1.0625rem;
  }
  .entry-company {
    color: var(--primary);
    font-size: 0.8125rem;
    font-weight: 600;
    margin-top: 2px;
  }
  .entry-sector {
    color: var(--text-muted);
    font-size: 0.8125rem;
    margin-top: 1px;
  }
  .entry-side {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 2px;
    white-space: nowrap;
  }
  .entry-date {
    color: var(--text-muted);
    font-size: 0.8125rem;
  }
  .entry-domain {
    color: var(--primary);
    font-size: 0.8125rem;
  }
  .entry-points {
    margin: var(--gap-xs) 0 var(--gap-xs);
    padding-left: 1.125rem;
    font-size: 0.9375rem;
    color: var(--text);
  }
  .entry-points li {
    margin-bottom: 2px;
  }
  .entry-env {
    font-size: 0.8125rem;
    color: var(--text-muted);
  }
  .entry-env strong {
    color: var(--text);
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-lg);
  }
  .plain {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 0.9375rem;
  }
  .plain strong {
    color: var(--primary);
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
</style>
