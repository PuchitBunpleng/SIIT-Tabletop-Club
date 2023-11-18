<script>
	import { page } from '$app/stores'
	import { userID } from '$lib/store.js'
</script>

{#if $page.url.pathname === '/'}
	<nav>
		<a href="/boardgame">Our Collections!</a>
		{#if $userID}
			<a href="/home">Home</a>
			<a href="/logout" class="button">Log Out</a>
		{:else}
			<a href="/login" class="button">Login</a>
		{/if}
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
		{$userID}
		<a href="/logout" class="button">Log Out</a>
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
		padding: 0 0.3rem;
	}

	nav a {
		text-decoration: none;
		color: #fdf6fd;
		margin: 0.8rem;
	}

	.button {
		background: #9a3197;
		border: none;
		border-radius: 0.8rem;
		padding: 0.6rem 1rem;
		color: #fdf6fd;
	}
	.button:hover {
		background: rgb(154, 49, 151, 0.5);
	}
</style>
