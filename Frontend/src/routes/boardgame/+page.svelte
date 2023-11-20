<script>
	import { onMount } from 'svelte';
	import { getAllBoardGames } from './path/to/page.js';
  
	let boardGames = []; // Reactive variable to store fetched board games
  
	onMount(async () => {
    try {
      const data = await getAllBoardGames(); // Fetch board games from the backend
      console.log('Fetched data:', data); // Log fetched data to the console for debugging
      boardGames = data; // Update the reactive variable with the fetched data
    } catch (error) {
      console.error('Error fetching board games:', error); // Log any error to the console
    }
  	});
  </script>

<body>
	<div class="content">
		<p>{Mr.}{Firstname} {Surname}</p>
        <h1 class="orange-text"><b>________________________</b></h1>
		<div class="search-bar">
			<h1 class="search-text">Board Games</h1>
			<input type="text" id="search-input" placeholder="Search..." />
			<button id="search-button">Search</button>
		</div>

		<table>
			<!-- Your SQL data will be dynamically inserted here -->
			<tr>
				<th>Board Game</th>
				<th>Description</th>
			</tr>
			<!-- Example row -->
			<tr>
				<td>{game.b_name}</td>
          		<td>{game.description}</td>
			</tr>
		</table>
	</div>
</body>

<style>
	body {
        height: 100%;
		margin: 0;
		padding: 0;
		font-family: Georgia, 'Times New Roman', Times, serif;
		background-color: #fffbf5;
		display: flex;
		flex-direction: column;
	}

	/* Content section */
	.content {
		margin: 30px;
	}

	.search-bar {
		text-align: center;
	}

	.search-text {
		margin-bottom: 10px;
		color: #9a3197;
		text-align: left;
	}

	.orange-text {
    margin-top: 0%;
    color: #F59E0B;
	}

	#search-input {
		padding: 5px;
		margin-right: 5px;
	}

	#search-button {
		padding: 5px 10px;
		cursor: pointer;
		border-color: #fdf6fd;
		color: #fdf6fd;
		background-color: #9a3197;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}

	table,
	th,
	td {
		border: 1px solid #e5d5c0;
	}

	th,
	td {
		padding: 10px;
		text-align: left;
		background-color: #faf4ec;
	}
	/* Media queries for responsive design */
	@media (max-width: 1000px) {
	}
</style>
