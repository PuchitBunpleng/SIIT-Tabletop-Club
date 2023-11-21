<script>
    import api from '$lib/api.js';
    import {goto} from '$app/navigation'
	export let data;

    $: p_e_name = data.e_name
    $: pp_e_name = data.e_name
    let participate = data?.participate;
    let row_num = 0;
    if(participate){row_num = participate.length}
    let publicparticipate = data?.publicparticipate;
    let p_row_num = 0;
    if(publicparticipate){p_row_num = publicparticipate.length}
    let member = data?.member;
   let memberall = data?.memberall
    $: p_std_id = memberall?.std_id;
    let personall = data?.memberall
    $: pp_person_id = personall?.person_id;
    let event = data?.event
    let open_public = 0
    if(event){ open_public = event.open_for_public}
    console.log("check")

    let addPart = () => {
		api
			.post(`/participate`, {
        p_std_id,p_e_name
			})
			.then((res) => {
				console.log(res);
        alert('Add successfully')
        location.reload(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

    let addPubPart = () => {
		api
			.post(`/public`, {
        pp_person_id,pp_e_name
			})
			.then((res) => {
				console.log(res);
        alert('Add successfully')
        location.reload(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};
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
                    <th>ID</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="partTableBody">
                {#if row_num}
					{#each participate as row (row.p_std_id)}
						<tr>
							<td>{row.p_std_id}</td>
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
                {#if p_row_num}
					{#each publicparticipate as row (row.pp_person_id)}
						<tr>
							<td>{row.pp_person_id}</td>
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

        <label for="part">Add member participation:</label>
			<select bind:value={p_std_id }>
                {#if memberall}
				{#each data.memberall as member}
					<option value={member.std_id}>
						{member.std_id }
					</option>
				{/each}
                {/if}
			</select>
        <button type="submit" on:click={addPart}>Add</button>
        {#if open_public}
        <label for="part">Add public participation:</label>
			<select bind:value={pp_person_id }>
                {#if personall}
				{#each data.personall as person}
					<option value={person.person_id}>
						{person.person_id }
					</option>
				{/each}
                {/if}
			</select>
        <button type="submit" on:click={addPubPart}>Add</button>
        {/if}

        <div class="page-buttons">
            <button type="button" on:click={()=>{goto('/event')}}>Back</button>
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