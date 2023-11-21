<script>
	import api from '$lib/api.js';
	import { goto } from '$app/navigation';

	export let data;

	let member = data?.member;
	let reservation = data?.reservation;
	let r_id = data.r_id;
	let r_date = reservation.r_date.split('T')[0];
	$: r_time = reservation?.r_time;
	$: r_b_name = reservation?.r_b_name;
	$: r_cancel = reservation?.r_cancel;
	let updateReservation = () => {
		api
			.put(`/reservation/${data.r_id}`, {
				r_id,
				r_date,
				r_time,
				r_b_name,
				r_cancel
			})
			.then((res) => {
				console.log(res);
				alert('Update successfully');
				goto('/reserve');
			})
			.catch((err) => {
				console.log(err);
			});
	};
</script>

<body>
	<div class="content">
		<!-- Your content -->
		<h1>{member?.name}</h1>
		<h1 class="orange-text"><b>________________________</b></h1>
		<h1 class="page-text">Add a reservation</h1>
		<div class="page-form">
			<img src="/images/edit.png" alt="Add a Reservation" class="page-image=" />
			<label for="date">Date:</label>
			<input bind:value={r_date} type="date" id="date" name="date" />

			<label for="time">Time:</label>
			<input bind:value={r_time} type="time" id="time" name="time" />

			<label for="boardgame">Board Game:</label>
			<select bind:value={r_b_name}>
				{#each data.boardgame as game}
					<option value={game.b_name}>
						{game.b_name}
					</option>
				{/each}
			</select>

			<div class="page-buttons">
				<button
					type="button"
					on:click={() => {
						goto('/reserve');
					}}>Back</button
				>
				<button type="submit" on:click={updateReservation}>Update</button>
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
		padding-bottom: 8rem;
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
		margin-top: 1rem;
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

	/* Media queries for responsive design */
	@media (max-width: 1000px) {
		.page-form {
			max-width: 90%;
		}
	}
</style>
