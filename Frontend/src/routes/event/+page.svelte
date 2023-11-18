<body>
    
    <div class="content">
        <p>{Mr.}{Firstname} {Surname}</p>
        <h1 class="orange-text"><b>________________________</b></h1>
        <div class="search-bar">
            <h1 class="search-text">Event Management</h1>
            <input type="text" id="search-input" placeholder="Search...">
            <button id="search-button">Search</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Open for Public</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="eventTableBody">
                <!-- This part will be populated dynamically -->
            </tbody>
        </table>
        <div class="page-buttons">
            <button onclick="location.href='eventadd.html'">Add</button>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        function populateTable() {
            let events = JSON.parse(localStorage.getItem('events')) || [];
            let tableBody = $('#eventTableBody');
            tableBody.empty();

            events.forEach(event => {
                let newRow = `<tr>
                                <td>${event.name}</td>
                                <td>${event.topic}</td>
                                <td>${event.date}</td>
                                <td>${event.time}</td>
                                <td>${event.type}</td>
                                <td>${event.openForPublic ? 'Yes' : 'No'}</td>
                                <td><a href="eventedit.html" class="edit-button">Edit</a></td>
                                <td><a href="#" class="delete-button" onclick="return confirm('Are you sure you want to delete this event?')">Delete</a></td>
                            </tr>`;
                tableBody.append(newRow);
            });
        }

        $(document).ready(function () {
            populateTable();

            $(document).on('click', '.edit-button', function () {
                // Code to allow editing of the respective row
                // You might display input fields in place of text or implement a modal for editing
            });

            $(document).on('click', '.delete-button', function() {
                $(this).closest('tr').remove(); // Removes the closest row containing the delete button
                // You might want to include backend calls here to delete from a database
            });
        });
    </script>

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