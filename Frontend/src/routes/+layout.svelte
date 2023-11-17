<script>
    import { page } from '$app/stores'
    import Hero from '$lib/components/Hero.svelte'
    import Header from '$lib/components/Header.svelte'
    import Nav from "$lib/components/Nav.svelte"
</script>

{#if $page.url.pathname === '/'}
    <Hero />
{:else}
    <Header />
{/if}
<Nav />
<slot />