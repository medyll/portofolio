<script lang="ts">
  let { code }: { code: string } = $props();

  let el: HTMLDivElement;
  let svg = $state('');

  $effect(() => {
    let cancelled = false;
    (async () => {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'strict' });
      const id = 'm-' + Math.random().toString(36).slice(2);
      try {
        const result = await mermaid.render(id, code);
        if (!cancelled) svg = result.svg;
      } catch {
        if (!cancelled) svg = '';
      }
    })();
    return () => {
      cancelled = true;
    };
  });
</script>

<div class="mermaid-wrap" bind:this={el}>
  {#if svg}
    <!-- eslint-disable-line svelte/no-at-html-tags -->
    {@html svg}
  {:else}
    <pre class="mermaid-fallback">{code}</pre>
  {/if}
</div>

<style>
  .mermaid-wrap {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--gap-lg);
    overflow-x: auto;
  }
  .mermaid-wrap :global(svg) {
    max-width: 100%;
    height: auto;
  }
  .mermaid-fallback {
    margin: 0;
    font-family: var(--mono);
    font-size: 0.8125rem;
    white-space: pre-wrap;
    color: var(--text-muted);
  }
</style>
