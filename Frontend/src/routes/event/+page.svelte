<script>
    import api from '$lib/api.js';
	export let data;

    let event = data?.eventall;
    let row_num = 0;
    if(event){row_num = event.length}
    let member = data?.member;
    console.log(row_num)
</script>

<body>
    
    <div class="content">
        <h1>{member?.name}</h1>
        <h1 class="orange-text"><b>________________________</b></h1>
 <!--     <div class="search-bar">
            <h1 class="search-text">Event Management</h1>
            <input type="text" id="search-input" placeholder="Search...">
            <button id="search-button">Search</button>
        </div> -->  

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Open for Public</th>
                    <th>Participations</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="eventTableBody">
                {#if row_num}
					{#each event as row (row.e_name)}
						<tr>
							<td>{row.e_name}</td>
							<td>{(row.date.split("T"))[0]}</td>
							<td>{row.time}</td>
							<td>{row.open_for_public}</td>
                            <td><a href="/event/part/{row.e_name}">Participations</a></td>
							<td><a href="/event/{row.e_name}"><img src="/images/editicon.png" alt="edit" width="25rem"></a></td>
							<td><button on:click={() => {
                                api.delete(`/event/${row.e_name}`).then(res => {
                                  alert("Delete successfully")
                                  location.reload(true);
                                }).catch(err => {
                                  console.log(err)
                                })
                              }} id="delete"><img src="/images/delete.png" alt="delete" width="25rem"></button></td>
						</tr>
					{/each}
				{/if}
            </tbody>
        </table>
        <div class="page-buttons">
            <button onclick="location.href='/event/add'">Add</button>
        </div>
    </div>

</body>

<style>

body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: #FFFBF5;
    display: flex;
    flex-direction: column;
}

/* Content section */
.content {
    margin: 30px;
}

.search-bar {
    text-align: center;
}

.search-text {
    margin-bottom: 10px;
    color: #9A3197;
    text-align: left;
}

.orange-text {
    margin-top: 0%;
    color: #F59E0B;
}

#search-input {
    padding: 5px;
    margin-right: 5px;
}

#search-button {
    padding: 5px 10px;
    cursor: pointer;
    border-color: #FDF6FD;
    color: #FDF6FD;
    background-color: #9A3197;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #E5D5C0;
}

th, td {
    padding: 10px;
    text-align: left;
    background-color: #FAF4EC;
}

table tbody td {
		background-color: #ffffff;
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
    border-color: #FDF6FD;
    color: #FDF6FD;
    background-color: #9A3197;
}

button:hover {
    background-color: #9A3197;
    color: #fff;
}
/* Media queries for responsive design */
@media (max-width: 1000px) {

}

</style>