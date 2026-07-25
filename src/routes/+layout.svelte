<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';

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
    <a class="brand" href="{base}/">medyll</a>
    <div class="spacer"></div>
    <a class="nav-link" href="{base}/profile">Profile</a>
    <button class="theme-toggle" aria-label="Toggle theme" onclick={toggle}>
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  </header>

  {@render children()}

  <footer class="footer">
    <a href="https://github.com/medyll" target="_blank" rel="noreferrer">github.com/medyll</a>
    · Lebrun Meddy
  </footer>
</div>
