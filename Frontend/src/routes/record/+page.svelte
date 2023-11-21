<script>
	export let data;
	console.log(data)

	let record = data?.record;
	let row_num = 0;
	if (record) row_num = record.length;
</script>

<body>
	<div class="content">
		<h1>{data?.member?.name}</h1>
		<h1 class="orange-text"><b>________________________</b></h1>
		<div class="reserve">
			<h1 class="reserve-text">Record</h1>
		</div>
		<table>
			<!-- Table Header -->
			<thead>
				<tr>
					<th>Record ID</th>
					<th>Board Game</th>
					<th>Date</th>
					<th>Winner</th>
					<th>Point</th>
					<!-- <th>Edit</th>
					<th>Delete</th> -->
				</tr>
			</thead>
			<!-- Table Body -->
			<tbody>
				<!-- Add an ID to the tbody -->
				{#if row_num}
					{#each record as row, i}
						<tr>
							<td>{row.record_id}</td>
							<td>{row.b_name}</td>
							<td>{row.date.split('T')[0]}</td>
							<td>{row.winner}</td>
							<td>{row.point}</td>
							<!-- <td
								><a href="/record/{row.record_id}"
									><img src="/images/editicon.png" alt="edit" width="25rem" /></a
								></td
							>
							<td>delete</td> -->
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<div class="page-buttons">
			<button onclick="location.href='/record/add'">Add</button>
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

	/* Content section */
	.content {
		margin: 30px;
	}

	.reserve {
		text-align: center;
	}

	.reserve-text {
		margin-bottom: 10px;
		color: #9a3197;
		text-align: left;
	}

	.orange-text {
		margin-top: 0%;
		color: #f59e0b;
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

	td {
		background-color: white;
	}
	.page-buttons {
		display: flex;
		justify-content: center;
	}

	button {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		margin: 10px;
		cursor: pointer;
		border-color: #fdf6fd;
		color: #fdf6fd;
		background-color: #9a3197;
	}

	button:hover {
		background-color: #9a3197;
		color: #fff;
	}
	/* Media queries for responsive design */
	@media (max-width: 1000px) {
	}
</style>
