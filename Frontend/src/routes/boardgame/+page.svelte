<script>
	export let data;
	let boardgame = data?.data;
	console.log(boardgame);
</script>

<body>
	<div class="content">
		<!-- <div class="search-bar">
				<h1 class="search-text">Board Games</h1>
				<input type="text" id="search-input" placeholder="Search...">
				<button id="search-button">Search</button>
			</div> -->
		<div class="center">
			<h1>Boardgame List</h1>
		</div>
		<table>
			<thead>
				<tr>
					<th>Board Game</th>
					<th>Description</th>
					<!-- <th>Edit</th>
						<th>Delete</th> -->
				</tr>
			</thead>
			<tbody>
				{#if boardgame}
					{#each boardgame as game, i}
						<tr>
							<td>{game.b_name}</td>
							<td>{game.description}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<div class="page-buttons">
			<!-- <button onclick="location.href='/boardgame/add'">Add</button> -->
		</div>
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

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
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
		color: #f59e0b;
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
		margin-bottom: 7rem;
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
