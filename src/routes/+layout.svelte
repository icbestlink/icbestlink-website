<script>
  import { fade } from "svelte/transition";
  import Header from "$lib/Header.svelte";
  import Hero from "$lib/Hero.svelte";
  let { children } = $props();
  import "../app.css";
  import { page } from "$app/state";
  import Footer from "$lib/Footer.svelte";

  let route = $derived(page.route.id);
</script>

<Header {route} />
<Hero {route} />
{#key route}
  <div in:fade={{ duration: 1000 }}>
    {@render children()}
  </div>
{/key}
<Footer />
