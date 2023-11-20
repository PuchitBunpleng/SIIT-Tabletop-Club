<script>
	export let data;

	function updateEvent() {
		const eventDate = document.getElementById('eventDate').value;
		const eventDetails = document.getElementById('eventDetails').value;
		const eventLink = document.getElementById('eventLink').value;
		const eventImage = document.getElementById('eventImage').files[0]; // Get the selected file

		// Perform actions to update the event details and image
		// You can use FormData to send the data to a server or perform other actions as required
	}

	function updateNews() {
		const newsDetails = document.getElementById('newsDetails').value;
		const newsLink = document.getElementById('newsLink').value;
		const newsImage = document.getElementById('newsImage').files[0]; // Get the selected file

		// Perform actions to update the news details and image
		// You can use FormData to send the data to a server or perform other actions as required
	}

	function previewImage(event) {
		const input = event.target;
		const preview = input.parentElement.querySelector('div[id$="ImagePreview"]');
		while (preview.firstChild) {
			preview.removeChild(preview.firstChild);
		}

		const files = input.files;
		if (files && files[0]) {
			const reader = new FileReader();
			reader.onload = function (e) {
				const img = document.createElement('img');
				img.src = e.target.result;
				img.style.maxWidth = '200px'; // Adjust image size if needed
				preview.appendChild(img);
			};
			reader.readAsDataURL(files[0]);
		}
	}
</script>

<body>
	<section class="content">
		<div class="left-panel">
			<div>
				<h3>Next Event:</h3>
				<form id="eventForm">
          Event Date: 
					<input type="text" id="eventDate" placeholder="18-19/11/2023" /><br>
          Event Link:
					<input type="text" id="eventLink" placeholder="https://url.com" />
					<div class="page-buttons">
						<button onclick="updateEvent()">Update Event</button>
					</div>
					<div id="eventImagePreview" />
				</form>
			</div>
		</div>

		<div class="bio">
			<form id="newsForm">
				<h1>Welcome, {data.name}</h1>
				<h1 class="orange-text"><b>________________________</b></h1>
				<div class="title-text">
					<h1>News Topic</h1>
				</div>
				<input type="text" id="newsDetails" placeholder="News Details" />
				<input type="text" id="eventDate" placeholder="Event Date (e.g., 18-19/11/2023)" />
				<input type="text" id="newsLink" placeholder="News Link" />
				<input type="file" id="newsImage" accept="image/*" onchange="previewImage(event)" />
				<div class="page-buttons">
					<button onclick="updateNews()">Update News</button>
				</div>
				<div id="newsImagePreview" />
			</form>
		</div>
	</section>
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
		display: flex;
		height: 100%;
		flex-direction: row;
	}

	.left-panel {
		display: flex;
		flex-direction: column;
		justify-content: left;
		text-align: left;
		padding: 20px;
		background-color: #fef3c7;
		min-width: 18.5em;
		max-width: 18.5em;
	}

	.bio {
		justify-content: space-between;
		padding: 20px;
		word-wrap: break-word;
	}

	.orange-text {
		color: #f59e0b;
	}

	.title-text {
		margin-bottom: 10px;
		color: #9a3197;
		text-align: left;
	}

	.page-buttons {
		display: flex;
		justify-content: left;
	}

	button {
		padding: 8px 16px;
		border: none;
		border-radius: 5px;
		margin: 10px;
		margin-left: 0%;
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
	@media (max-width: 1024px) {
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.left-panel {
			justify-content: center;
			align-items: center;
			width: 100%;
		}
		.bio {
			width: 90%;
			padding: 10px;
		}

		/* Adjust form inputs for smaller screens */
		input[type='text'],
		input[type='file'],
		button {
			width: 90%;
			margin-bottom: 10px;
		}

		.page-buttons {
			display: flex;
			justify-content: left; /* To horizontally center */
			margin-top: 10px; /* Adjust as needed */
		}
	}
</style>
