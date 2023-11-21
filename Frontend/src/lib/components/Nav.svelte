<script>
	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { userID } from '$lib/store.js';
	import { goto } from '$app/navigation';
	import api from '$lib/api.js';
	import AuthButton from './AuthButton.svelte';

	let core = 0;
	$: UID = null;

	const fetchData = async () => {
		let id = '';
		userID.subscribe((val) => {
			id = val;
		});

		if (id) {
			try {
				const response = await api.get(`/member/${id}`);
				UID = response?.data[0]?.std_id;
				core = response?.data[0]?.core || 0;
			} catch (err) {
				let error = err.response.status;
				console.log(error);
				if (error === 403) {
					userID.set('');
					goto('/login');
				}
			}
		} else {
			UID = null;
		}
	};

	// Run fetchData on component mount
	fetchData();

	// Run fetchData every time the page store changes (routing changes)
	const unsubscribe = page.subscribe(() => {
		fetchData();
	});

	// Unsubscribe from the page store when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});
</script>

{#key core}
	{#if $page.url.pathname === '/'}
		<nav>
			<div>
				<a href="/boardgame">Our Collections!</a>
				{#if UID}
					<a href="/home">Home</a>
				{/if}
			</div>
			<div class="auth">
				{#if UID}
					<p>ID: {UID}</p>
					<AuthButton path="/logout" text="Log out" />
				{:else}
					<AuthButton path="/login" text="Log in" />
				{/if}
			</div>
		</nav>
	{:else if $page.url.pathname === '/login'}
		<nav />
	{:else if $page.url.pathname === '/boardgame' && !UID}
		<nav>
			<div>
				<a href="/boardgame">Our Collections!</a>
				{#if UID}
					<a href="/home">Home</a>
				{/if}
			</div>
			<div class="auth">
				{#if UID}
					<p>ID: {UID}</p>
					<AuthButton path="/logout" text="Log out" />
				{:else}
					<AuthButton path="/login" text="Log in" />
				{/if}
			</div>
		</nav>
	{:else}
		<nav>
			<div>
				<a href="/home">Home</a>
				<a href="/boardgame">Board Games</a>
				<a href="/reserve">Reservation</a>
				<a href="/record">Record</a>
				{#if core}
					<a href="/event">Event Management</a>
					<a href="/member">Member Management</a>
				{/if}
			</div>
			<div class="auth">
				<p>ID: {UID}</p>
				<AuthButton path="/logout" text="Log out" />
			</div>
		</nav>
	{/if}
{/key}

<style>
	nav {
		background-color: #e084cd;
		text-align: left;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0.8rem;
	}

	nav a {
		text-decoration: none;
		color: #fdf6fd;
		margin: 0.8rem;
	}

	.auth {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.auth p {
		margin: 0 1.25rem;
		color: #fdf6fd;
		font-weight: 500;
	}
</style>
