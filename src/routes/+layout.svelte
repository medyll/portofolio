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
  <header class="topbar">
    <span class="brand">medyll</span>
    <div class="spacer"></div>
    <button class="theme-toggle" aria-label="Toggle theme" onclick={toggle}>
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  </header>

  {@render children()}

  <footer class="footer">Statically generated · SvelteKit</footer>
</div>
