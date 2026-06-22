<script lang="ts">
  import '../app.css';

  let { children } = $props();

  let theme = $state<'light' | 'dark' | null>(null);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    theme = next;
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  }

  $effect(() => {
    const t = localStorage.getItem('theme');
    theme = t === 'dark' ? 'dark' : 'light';
  });
</script>

<div class="page">
  <header class="toolbar toolbar-stretch" data-pad="none">
    <strong class="text-base">medyll</strong>
    <div class="toolbar-spacer"></div>
    <button class="btn-icon theme-toggle" aria-label="Basculer le thème" onclick={toggle}>
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  </header>

  {@render children()}

  <footer class="text-muted text-sm" style="margin-top: var(--marg-3xl); padding-block: var(--pad-lg);">
    Généré statiquement · SvelteKit + @medyll/css-base
  </footer>
</div>
