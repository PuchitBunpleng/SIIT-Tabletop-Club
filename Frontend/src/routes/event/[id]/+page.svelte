<script>
	import api from '$lib/api.js';
	import { goto } from '$app/navigation';

	export let data;

	let member = data?.member;
    console.log(member)
    console.log(member?.name)
  $: e_name = data.e_name;
  let event = data?.event;
	let date= ((event?.date).split("T"))[0];
	$: time = event?.time;
	$: open_for_public = event?.open_for_public;

	let updateEvent = () => {
		api
			.put(`/event/${data.e_name}`, {
                e_name ,date,time ,open_for_public
			})
			.then((res) => {
				console.log(res);
        alert('Update successfully')
        goto('/event');
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
		<h1 class="page-text">Edit event</h1>
		<div class="page-form">
			<img src="/images/edit.png" alt="Update event" class="page-image=" />

            <label for="date">Date:</label>
			<input bind:value={date} type="date" id="date" name="date" placeholder="Enter date" />

			<label for="time ">Time:</label>
			<input bind:value={time } type="time " id="time " name="Enter time " />

			<label for="open_for_public">Open for public:</label>
			<input bind:value={open_for_public} type="text" id="open_for_public" name="0 for private, 1 for public" />

			<div class="page-buttons">
				<button
					type="button"
					on:click={() => {
						goto('/event');
					}}>Back</button
				>
				<button type="submit" on:click={updateEvent}>Update</button>
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
