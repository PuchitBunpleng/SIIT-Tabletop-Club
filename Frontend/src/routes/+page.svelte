<script>
	import { onMount } from 'svelte'
	let data;
	onMount(async () => {
		data = await fetch('http://localhost:3000/members').then((x) => x.json());
        console.log(data)
	})
</script>

<pre>
    {JSON.stringify(data)}
</pre>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
