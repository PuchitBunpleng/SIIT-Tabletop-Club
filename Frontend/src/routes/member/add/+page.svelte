<script>
	import api from '$lib/api.js';
    import {goto} from '$app/navigation'

	export let data;

	let member = data?.member;


	let std_id = 0;
	let name = '';
	let tel = '';
	let password = '';
    let curriculum = '';
	let core = 0;
	let addMember = () => {
		api
			.post('/member', {
				std_id,  name,  tel,  password, curriculum, core
			})
			.then((res) => {
				console.log(res);
            alert('Add successfully')
            goto('/member');
			})
            
			.catch((err) => {
				alert(err.response.data.message)
				console.log(err);
			});
	};
</script>

<body>
	<div class="content">
		<!-- Your content -->
		<h1>{member?.name}</h1>
		<h1 class="orange-text"><b>________________________</b></h1>
		<h1 class="page-text">Add a member</h1>
		<div class="page-form">
			<img src="/images/edit.png" alt="Add a Member" class="page-image=" />

            <label for="std_id">Student ID:</label>
			<input bind:value={std_id} type="text" id="std_id" name="std_id" placeholder="Enter student ID" />

            <label for="name">Name:</label>
			<input bind:value={name} type="text" id="name" name="name" placeholder="Enter name" />

			<label for="tel">Tel:</label>
			<input bind:value={tel} type="text" id="tel" name="Enter telephone number" />

			<label for="password">Password:</label>
			<input bind:value={password} type="password" id="password" name="Enter password" />

			<label for="curriculum">Curriculum:</label>
			<input bind:value={curriculum} type="text" id="curriculum" name="curriculum" placeholder="Enter curriculum" />

            <label for="core">Type of member:</label>
			<select bind:value={core}>
				<option value={0}>
					{0}
				</option>
				<option value={1}>
					{1}
				</option>
			</select>
              

			<div class="page-buttons">
				<button type="button" on:click={()=>{goto('/member')}}>Back</button>
				<button type="button" on:click={addMember}>Add</button>
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

	input {
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

	/* Media queries for responsive design */
	@media (max-width: 1000px) {
		.page-form {
			max-width: 90%;
		}
	}
</style>
