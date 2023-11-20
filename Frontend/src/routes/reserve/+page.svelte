<script>
	export let data;

	let member = data?.member;
  console.log(member)
	let reservation = data?.reservation;
	let row_num = 0;
	if (reservation) {
		row_num = reservation.length;
	}
</script>

<body>
	<div class="content">
		<h1>{member?.name}</h1>
		<h1 class="orange-text"><b>________________________</b></h1>
		<div class="reserve">
			<h1 class="reserve-text">Reservation</h1>
		</div>
		<table>
			<!-- Your SQL data will be dynamically inserted here -->

			<thead>
				<tr>
					<th>ID</th>
					<th>Date</th>
					<th>Time</th>
					<th>Board Game</th>
					<th>Edit</th>
          {#if member?.core}
					  <th>Delete</th>
          {:else}
            <th>Cancel</th>
          {/if}
				</tr>
			</thead>
			<!-- Table Body -->
			<tbody>
				{#if row_num}
					{#each reservation as row (row.r_id)}
						<tr>
							<td>{row.r_id}</td>
							<td>{row.r_date}</td>
							<td>{row.r_time}</td>
							<td>{row.r_b_name}</td>
							<td>Edit</td>
							<td>Delete</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<div class="reserve-buttons">
			<button onclick="location.href='/reserve/add'">Add</button>
      <button onclick="location.href='/reserve/cancel'">View my cancellation</button>
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

	table tbody td {
		background-color: #ffffff;
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
	.reserve-buttons {
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
