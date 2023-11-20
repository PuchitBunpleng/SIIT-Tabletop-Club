<script>
	export let data;
	console.log(data);
	let core = data?.core;
</script>

{#if core}
	<body>
		<div class="content">
			<div class="search-bar">
				<h1 class="search-text">Board Games</h1>
				<input type="text" id="search-input" placeholder="Search...">
				<button id="search-button">Search</button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Board Game</th>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody id="boardGameTableBody">
					<!-- This part will be populated dynamically -->
				</tbody>
			</table>
			<div class="page-buttons">
				<button onclick="location.href='/boardgame/add'">Add</button>
			</div>
		</div>
	</body>

{:else}
	<body>
		<div class="content">
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
					<td>{data.b_name}</td>
					<td>{data.description}</td>
				</tr>
			</table>
		</div>
	</body>
{/if}

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
