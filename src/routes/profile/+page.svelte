<script lang="ts">
  import { summary, skills, techSkills, recentActivities, timeline, languages, interests } from './data';

  function splitDate(date: string) {
    const [range] = date.split('·');
    const [start, end] = range.split('–').map((s) => s.trim());
    return { start, end };
  }
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
    {#each timeline as t, i}
      {@const d = splitDate(t.date)}
      <li class="entry" class:left={i % 2 === 1} class:right={i % 2 === 0}>
        <span class="entry-date" title={t.date}>
          <span class="entry-date-start">{d.start}</span>
          {#if d.end && d.end !== d.start}
            <span class="entry-date-end">{d.end}</span>
          {/if}
        </span>
        <div class="card">
          <div class="meta">
            <h3>{t.role}</h3>
            <div class="entry-company">{t.company}</div>
            {#if t.sector}<div class="entry-sector">{t.sector}</div>{/if}
            <div class="entry-domain">{t.domain}</div>
            <div class="entry-period">{t.date}</div>
          </div>
          <div class="details">
            <ul class="entry-points">
              {#each t.points as p}
                <li>{p}</li>
              {/each}
            </ul>
            <div class="entry-env"><strong>Env:</strong> {t.env.join(', ')}</div>
          </div>
        </div>
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
    position: relative;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--primary);
    transform: translateX(-50%);
  }

  .entry {
    position: relative;
    display: flex;
    padding-block: var(--gap-lg);
  }
  .entry.right {
    justify-content: flex-end;
  }
  .entry.left {
    justify-content: flex-start;
  }

  .entry-date {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4.25rem;
    height: 4.25rem;
    flex: 0 0 4.25rem;
    box-sizing: border-box;
    background: var(--bg);
    border: 2px solid var(--primary);
    border-radius: 50%;
    padding: 0.25rem;
    color: var(--primary);
    text-align: center;
    line-height: 1.15;
  }
  .entry-date-start,
  .entry-date-end {
    font-size: 0.6875rem;
    font-weight: 700;
  }
  .entry-date-end {
    color: var(--text-muted);
  }
  .entry-date-end::before {
    content: '';
    display: block;
    width: 0.875rem;
    height: 1px;
    background: var(--border);
    margin: 0.15rem auto;
  }

  .entry-period {
    color: var(--text-muted);
    font-size: 0.75rem;
    margin-top: 4px;
  }

  .card {
    display: flex;
    width: calc(50% - 2.5rem);
    gap: var(--gap-md);
  }
  .entry.right .card {
    flex-direction: row;
  }
  .entry.left .card {
    flex-direction: row-reverse;
  }

  .meta {
    flex: 0 0 38%;
    min-width: 0;
  }
  .entry.left .meta {
    text-align: right;
  }
  .meta h3 {
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
  .entry-domain {
    color: var(--text-muted);
    font-size: 0.75rem;
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .details {
    flex: 1;
    min-width: 0;
  }
  .entry-points {
    margin: 0 0 var(--gap-xs);
    padding-left: 1.125rem;
    font-size: 0.9375rem;
    color: var(--text);
  }
  .entry.left .entry-points {
    padding-left: 0;
    padding-right: 1.125rem;
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

  @media (max-width: 760px) {
    .timeline::before {
      left: 1rem;
    }
    .entry,
    .entry.right,
    .entry.left {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-inline-start: 2.5rem;
    }
    .entry-date {
      position: static;
      transform: none;
      align-self: flex-start;
      margin-bottom: var(--gap-xs);
    }
    .card,
    .entry.right .card,
    .entry.left .card {
      width: 100%;
      flex-direction: column;
    }
    .meta,
    .entry.left .meta {
      text-align: left;
    }
    .entry.left .entry-points {
      padding-left: 1.125rem;
      padding-right: 0;
    }
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
