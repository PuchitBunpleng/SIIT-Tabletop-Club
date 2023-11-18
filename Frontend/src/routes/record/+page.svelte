<body>
    <div class="content">
        <p>{Mr.}{Firstname} {Surname}</p>
        <h1 class="orange-text"><b>________________________</b></h1>
        <div class="reserve">
            <h1 class="reserve-text">Record</h1>
        </div>
        <table>
            <!-- Table Header -->
            <thead>
                <tr>
                    <th>Board Game</th>
                    <th>Date</th>
                    <th>Winner</th>
                    <th>Point</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <!-- Table Body -->
            <tbody id="recordTableBody"> <!-- Add an ID to the tbody -->
                <!-- Example row -->
            </tbody>
        </table>
        <div class="page-buttons">
            <button onclick="location.href='recordadminadd.html'">Add</button>
        </div>
    </div>

    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        // Function to populate the table with board games from localStorage
        function populateTable() {
            let records = JSON.parse(localStorage.getItem('records')) || [];

            // Reference to the table body
            let tableBody = $('#recordTableBody');

            // Clear existing table rows
            tableBody.empty();

            // Loop through board games and append rows to the table
            records.forEach(record => {
                let newRow = `<tr>
                    <td>${record.boardGame}</td>
                            <td>${record.date}</td>
                            <td>${record.winner}</td>
                            <td>${record.point}</td>
                            <td><a href="recordadminedit.html" class="edit-button">Edit</a></td>
                            <td><a href="#" class="delete-button" onclick="return confirm('Are you sure you want to delete this playing record?')">Delete</a></td>
                            </tr>`;

                tableBody.append(newRow);
            });
        }

        // Call populateTable function when the document is ready
        $(document).ready(function () {
            populateTable();

            // Edit functionality
            $(document).on('click', '.edit-button', function () {
                // Code to allow editing of the respective row
                // You might display input fields in place of text or implement a modal for editing
            });

            // Delete functionality
            $(document).on('click', '.delete-button', function () {
                // Code to delete the respective row
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

.reserve {
    text-align: center;
}

.reserve-text {
    margin-bottom: 10px;
    color: #9A3197;
    text-align: left;
}

.orange-text {
    margin-top: 0%;
    color: #F59E0B;
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