<script>
	import api from '$lib/api.js';
	import { goto } from '$app/navigation';

	export let data;

	let member = data?.member;
	console.log(data)
	let boardgame = data?.boardgame;

	let b_name = '';
	let date = '';
	let winner = '';
	let point = '';

	let b_length = 0;
	if (boardgame) b_length = boardgame.length;

	let addRecord = async () => {
		try {
			const result = await api.post('/play', {
				b_name,
				date,
				start_time: '00:00:00',
				end_time: '00:00:00'
			});
			const rec_id = result.data.play_id
			await api.post('/record', {
				rec_id,
				winner,
				point
			});
			alert('Add successfully');
			goto('/record');
		} catch (err) {
			console.log(err);
		}
	};
</script>

<body>
	<div class="content">
		<!-- Your content -->
		<h1>{member?.name}</h1>
		<h1 class="orange-text"><b>________________________</b></h1>
		<h1 class="page-text">Add a record</h1>
		<div class="page-form">
			<div class="pic">
				<img src="/images/add.png" alt="Add a Record" class="page-image" />
			</div>
			<label for="boardgame">Board Game:</label>
			<select bind:value={b_name}>
				{#if b_length}
					{#each data.boardgame as game}
						<option value={game.b_name}>
							{game.b_name}
						</option>
					{/each}
				{/if}
			</select>

			<label for="date">Date:</label>
			<input bind:value={date} type="date" id="date" name="date" />

			<label for="winner">Winner:</label>
			<input bind:value={winner} type="text" id="winner" name="winner" placeholder="Enter winner" />

			<label for="point">Point:</label>
			<input bind:value={point} type="number" id="point" name="point" placeholder="Enter points" />

			<div class="page-buttons">
				<button
					type="button"
					on:click={() => {
						goto('/record');
					}}>Back</button
				>
				<button type="button" on:click={addRecord}>Add</button>
			</div>
		</div>
	</div>
</body>

<style>
	body {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Georgia, 'Times New Roman', Times, serif;
		background-color: #fffbf5;
	}

	/* Content section */
	.content {
		margin: 30px;
	}
	.page-form {
		margin: auto;
		width: 500px;
		background-color: #faf4ec;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	.page-text {
		margin-bottom: 10px;
		color: #9a3197;
		text-align: left;
		align-self: flex-start;
	}
	.orange-text {
		margin-top: 0%;
		color: #f59e0b;
	}

	.page-image {
		width: 200px;
		height: auto;
	}

	.page-inputs {
		margin-bottom: 20px;
		width: 500px;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}

	input,
	select {
		width: 100%;
		padding: 8px;
		margin-bottom: 10px;
		box-sizing: border-box;
	}

	.page-buttons {
		display: flex;
		justify-content: center;
	}

	button {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		margin-left: 10px;
		margin-right: 10px;
		cursor: pointer;
		border-color: #fdf6fd;
		color: #fdf6fd;
		background-color: #9a3197;
	}

	button:hover {
		background-color: #9a3197;
		color: #fff;
	}

	.pic {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Media queries for responsive design */
	@media (max-width: 1000px) {
		.page-form {
			max-width: 90%;
		}
	}
</style>
