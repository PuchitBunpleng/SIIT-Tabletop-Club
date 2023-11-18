<body>
	<div class="content">
		<div class="left-panel">
			<div class="paragraph">
				<img src="images/game1.png" alt="Game 1" />
				<h1>What are Tabletop Games?</h1>
				<p>
					Tabletop games are games that are normally played on a table or other flat surface, which
					include board games, tabletop role-playing games (TRPG), and miniature war games. The
					games are either cooperative or competitive, with many variations in complexity between
					them.
				</p>
			</div>

			<div class="paragraph">
				<img src="images/game2.png" alt="Game 2" />
				<h1>What are Euro Board Games?</h1>
				<p>
					Euro Board games are developed from war game simulation used in the military which
					simulates real-life situations with various factors to consider. Euro board games make
					players consider all possible factors with little to no luck during the game.
				</p>
			</div>

			<div class="paragraph">
				<img src="images/game3.png" alt="Game 3" />
				<h1>What are Tabletop Role-Playing Games?</h1>
				<p>
					Tabletop role-playing games feature the players immersing themselves into the game world
					by acting out as their characters. They encourage imaginative storytelling, language
					skills, and teamwork between players.
				</p>
			</div>
		</div>
		<div class="right-panel">
			<div class="core-members">
				<h1>Core Members</h1>
			</div>

			<div class="member">
				<img src="images/profile.png" alt="President" />
				<h3>President</h3>
				<p>John Doe</p>
			</div>

			<div class="member">
				<img src="images/profile.png" alt="Vice President" />
				<h3>Vice President</h3>
				<p>Jane Doe</p>
			</div>

			<div class="member">
				<img src="images/profile.png" alt="Treasurer" />
				<h3>Tresurer</h3>
				<p>Bob Smith</p>
			</div>

			<div class="member">
				<img src="images/profile.png" alt="Secretary" />
				<h3>Secretary</h3>
				<p>Alice Johnson</p>
			</div>

			<div class="contact">
				<p>Contact: tabletop@gmail.com</p>
				<p>xxx-xxx-xxx-x</p>
			</div>
		</div>
	</div>
</body>

<style>
	body {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Georgia, 'Times New Roman', Times, serif;
    display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		justify-content: space-between;
		background-color: #fffbf5;
	}

	.left-panel {
		width: 70%;
		padding: 10px;
	}

	.paragraph {
		margin-bottom: 150px;
	}

	.paragraph img {
		width: 100%;
		max-width: 200px;
		margin-left: 30px;
		margin-right: 30px;
		display: block;
		float: left;
	}

	.right-panel {
		width: 25%;
		background-color: #e5d5c0;
		padding: 10px;
	}

	.core-members,
	.contact {
		text-align: center;
	}

	.member {
		margin-bottom: 100px;
	}

	.member img {
		width: 100%;
		max-width: 120px;
		margin-left: 30px;
		margin-right: 30px;
		margin-bottom: 30px;
		display: block;
		float: left;
	}

	/* Media queries for responsive design */
	@media (max-width: 1024px) {
		.content {
			flex-direction: column;
		}
		.left-panel,
		.right-panel {
			justify-content: center;
			align-items: center;
			width: 100%;
		}
		.paragraph img {
			margin-left: auto;
			margin-right: auto;
			display: block;
			float: none;
		}

		.paragraph {
			text-align: center;
			margin-bottom: 20px; /* Adjust as needed */
		}
		.member {
			margin-bottom: 100px;
			text-align: left;
		}

		.member img {
			width: 100%;
			max-width: 120px;
			margin-left: 30%;
			margin-bottom: 1px;
			float: inline-start;
		}
	}
</style>
