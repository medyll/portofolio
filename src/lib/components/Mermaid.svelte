<script lang="ts">
  import { tick } from 'svelte';

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
        if (cancelled) return;
        svg = result.svg;
        await tick();
        // mermaid sets width="100%" on the svg, which always scales the
        // diagram to fill the container — fine when narrow, but it shrinks
        // wide diagrams until labels are unreadable. Give the svg its
        // natural viewBox pixel size instead; CSS below still caps it at
        // 100% of the wrapper so it scales down (never scrolls) if a
        // diagram somehow ends up wider than the page.
        const node = el?.querySelector('svg');
        const viewBox = node?.getAttribute('viewBox');
        if (node && viewBox) {
          const [, , w, h] = viewBox.split(/\s+/).map(Number);
          if (w && h) {
            node.setAttribute('width', `${w}`);
            node.setAttribute('height', `${h}`);
          }
        }
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
    display: flex;
    justify-content: center;
  }
  .mermaid-wrap :global(svg) {
    display: block;
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
