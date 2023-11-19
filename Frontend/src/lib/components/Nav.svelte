<script>
	import { page } from '$app/stores'
	import { userID } from '$lib/store.js'
	import AuthButton from './AuthButton.svelte'
</script>

{#if $page.url.pathname === '/'}
	<nav>
		<div>
			<a href="/boardgame">Our Collections!</a>
			{#if $userID}
				<a href="/home">Home</a>
			{/if}
		</div>
		<div class="auth">
			{#if $userID}
				<p>ID: {$userID}</p>
				<AuthButton path="/logout" text="Log out" />
			{:else}
				<AuthButton path="/login" text="Log in" />
			{/if}
		</div>
	</nav>
{:else if $page.url.pathname === '/login'}
	<nav />
{:else}
	<nav>
		<div>
			<a href="homepage.html">Home</a>
			<a href="boardgamemember.html">Board Games</a>
			<a href="reservationpage.html">Reservation</a>
			<a href="recordpage.html">Record</a>
		</div>
		<div class='auth'>
			<p>ID: {$userID}</p>
			<AuthButton path="/logout" text="Log out" />
		</div>
	</nav>
{/if}

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
