<script>
	export let data;

	let core = data.core;
</script>

{#if core}
	<body>
		<section class="content">
			<div class="left-panel">
				<div>
					<h3>Next Event:</h3>
					<p>18-19/11/2023</p>
					<p>
						<a
							href="https://www.facebook.com/100083189385964/posts/pfbid021JB3uxYN9YpXbdur1NCJioPaMFbvAFtRWBRyk9H1RAESCD16Ugu1ZnjgLYdN8YSel/?mibextid=cr9u03"
							target="_blank">TYBC Thailand Youth Boardgame Championship</a
						>
					</p>
					<div class="page-buttons">
						<button onclick="location.href='/home/edit'">Edit</button>
					</div>
				</div>
			</div>

			<div class="bio">
				<h1>Welcome, {data.name}</h1>
				<h1 class="orange-text"><b>________________________</b></h1>
				<div class="title-text"><h1>News Topic</h1></div>
				<p>
					1. TYBC Thailand Youth Boardgame Championship (Nov. 18(Sat)-19(Sun), 2023)
					<button class="page-button">Apply</button>
				</p>
				<p>
					<a
						href="https://www.facebook.com/100083189385964/posts/pfbid021JB3uxYN9YpXbdur1NCJioPaMFbvAFtRWBRyk9H1RAESCD16Ugu1ZnjgLYdN8YSel/?mibextid=cr9u03"
						target="_blank"
						>https://www.facebook.com/100083189385964/posts/pfbid021JB3uxYN9YpXbdur1NCJioPaMFbvAFtRWBRyk9H1RAESCD16Ugu1ZnjgLYdN8YSel/?mibextid=cr9u03</a
					>
				</p>
				<img src="/images/TYBC.jpg" alt="Profile" />
			</div>
		</section>
	</body>
{:else}
	<body>
		<section class="content">
			<div class="left-panel">
				<h3>Next Event:</h3>
				<p>18-19/11/2023</p>
				<p>
					<a
						href="https://www.facebook.com/100083189385964/posts/pfbid021JB3uxYN9YpXbdur1NCJioPaMFbvAFtRWBRyk9H1RAESCD16Ugu1ZnjgLYdN8YSel/?mibextid=cr9u03"
						target="_blank">TYBC Thailand Youth Boardgame Championship</a
					>
				</p>
			</div>

			<div class="bio">
				<h1>Welcome, {data.name}</h1>
				<h1 class="orange-text"><b>________________________</b></h1>
				<div class="title-text"><h1>News Topic</h1></div>
				<p>
					1. TYBC Thailand Youth Boardgame Championship (Nov. 18(Sat)-19(Sun), 2023)
					<button class="apply-button">Apply</button>
				</p>
				<p>
					<a
						href="https://www.facebook.com/100083189385964/posts/pfbid021JB3uxYN9YpXbdur1NCJioPaMFbvAFtRWBRyk9H1RAESCD16Ugu1ZnjgLYdN8YSel/?mibextid=cr9u03"
						target="_blank"
						>https://www.facebook.com/100083189385964/posts/pfbid021JB3uxYN9YpXbdur1NCJioPaMFbvAFtRWBRyk9H1RAESCD16Ugu1ZnjgLYdN8YSel/?mibextid=cr9u03</a
					>
				</p>
				<img src="/images/TYBC.jpg" alt="Profile" />
			</div>
		</section>
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
		background-color: #fff;
		word-wrap: break-word;
	}

	.bio a {
		max-width: 75%;
		display: block;
		word-wrap: break-word;
		margin-bottom: 10px;
	}

	.bio img {
		max-width: 100%;
		height: auto;
		border-radius: 10px;
		margin-top: 10px;
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
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		margin: 0px;
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
			flex-direction: column;
		}

		.left-panel {
			justify-content: center;
			align-items: center;
			width: 100%;
		}
	}
</style>
