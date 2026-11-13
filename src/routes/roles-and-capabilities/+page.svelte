<script lang="ts">
  import { base } from '$app/paths';

  const capabilities = [
    {
      title: 'Full-stack development',
      description: 'Build and maintain frontend and backend applications, with attention to code quality, performance and maintainability.'
    },
    {
      title: 'Technical leadership',
      description: 'Review code, pair with developers and mentor team members. Compare technical approaches and share knowledge while staying open to other solutions.'
    },
    {
      title: 'Team leadership',
      description: 'Onboard developers, organize work and support individual progress. Take part in hiring and performance reviews.'
    },
    {
      title: 'UI/UX design',
      description: 'Explore interface options through wireframes and mockups. Compare approaches and propose improvements for business applications.'
    },
    {
      title: 'Project delivery',
      description: 'Gather requirements, define roadmaps and model application data. Track progress, provide support and iterate as needs evolve.'
    }
  ];
</script>

<svelte:head>
  <title>Capabilities · medyll</title>
  <meta
    name="description"
    content="Full-stack development, technical and team leadership, UI/UX design and project delivery for startups, SMEs and large global enterprises."
  />
</svelte:head>

<capabilities-component>
  <capabilities-intro>
    <p class="eyebrow">Capabilities</p>
    <h1>What I can help you build</h1>
    <p class="role">Senior Full-Stack Lead Developer</p>
    <p class="introduction">
      I build web applications and internal business tools, design data models and APIs, and help
      development teams deliver maintainable software. My work also covers technical reviews,
      UI/UX exploration and AI integration into existing workflows.
    </p>
    <capabilities-links>
      <a href="{base}/">Explore my projects &rarr;</a>
      <a href="{base}/profile">View my experience &rarr;</a>
    </capabilities-links>
  </capabilities-intro>

  <capabilities-services role="region" aria-labelledby="services-title">
    <h2 id="services-title">How I contribute</h2>
    <capabilities-grid>
      {#each capabilities as capability}
        <capabilities-card>
          <h3>{capability.title}</h3>
          <p>{capability.description}</p>
        </capabilities-card>
      {/each}
    </capabilities-grid>
  </capabilities-services>

  <capabilities-focus role="region" aria-labelledby="focus-title">
    <h2 id="focus-title">Areas of focus</h2>
    <p>
      My main areas of work are back-office tools, internal business applications, data modeling
      and API design. I also build SEO-focused websites and SaaS applications, evaluate
      technologies, and design agentic architectures for AI-assisted workflows.
    </p>
    <p>
      Previous projects span banking, telecom, travel, logistics, rentals, e-commerce, food tech
      and media.
    </p>
  </capabilities-focus>

  <capabilities-assignments role="region" aria-labelledby="assignments-title">
    <h2 id="assignments-title">Where I fit best</h2>
    <p>
      I work with startups, small and midsize companies, and large global enterprises to design
      and build products or launch new digital services. I can contribute through proposals,
      prototypes and technical reviews, then carry technical decisions into implementation.
    </p>
  </capabilities-assignments>
</capabilities-component>

<style>
  capabilities-component {
    display: block;
    padding-block: 2rem 1rem;
  }

  capabilities-intro {
    display: block;
    max-width: 72ch;
  }

  .eyebrow {
    margin: 0 0 var(--gap-sm);
    color: var(--primary);
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 2.75rem);
  }

  .role {
    margin-block: var(--gap-md);
    font-weight: 600;
  }

  p {
    color: var(--text-muted);
    margin: var(--gap-sm) 0 0;
  }

  .introduction {
    font-size: 1.0625rem;
  }

  capabilities-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-sm) var(--gap-lg);
    margin-top: var(--gap-lg);
  }

  a {
    color: var(--primary);
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  capabilities-services,
  capabilities-focus,
  capabilities-assignments {
    display: block;
    margin-top: var(--gap-xl);
  }

  h2 {
    padding-bottom: var(--gap-sm);
    border-bottom: 1px solid var(--border);
    margin-bottom: var(--gap-lg);
    font-size: 1.25rem;
  }

  capabilities-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--gap-md);
  }

  capabilities-card {
    display: block;
    padding: var(--gap-lg);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
  }

  capabilities-card:last-child {
    grid-column: 1 / -1;
  }

  h3 {
    font-size: 1.0625rem;
  }

  capabilities-focus p,
  capabilities-assignments p {
    max-width: 75ch;
  }

  @media (max-width: 640px) {
    capabilities-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
