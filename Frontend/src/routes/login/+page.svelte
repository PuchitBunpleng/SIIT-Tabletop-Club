<script>
  let login = () => {
    axios.post('http://localhost:3000/login')
  }
</script>

<body>
	<div class="content">
		<h1 class="login-text">Login</h1>
		<div class="login-form">
			<form>
				<img src="images/login.png" alt="Login" class="login-image" />
				<div class="login-inputs">
					<label for="student-id">Student ID:</label>
					<input
						type="text"
						id="student-id"
						name="student-id"
						placeholder="Enter your student ID"
					/>

					<label for="password">Password:</label>
					<input type="password" id="password" name="password" placeholder="Enter your password" />
				</div>

				<div class="login-buttons">
					<button type="button" onclick="goBack()">Back</button>
          <button type="button" on:click={login}>Login</button>
				</div>
			</form>
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
	.content {
		margin: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.login-form {
		background-color: #faf4ec;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	.login-text {
		margin-bottom: 10px;
		color: #9a3197;
		text-align: left;
		align-self: flex-start;
	}
	.login-image {
		width: 200px;
		height: auto;
	}

	.login-inputs {
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

	.login-buttons {
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
</style>
