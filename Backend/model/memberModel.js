import mysql from 'mysql2/promise'; // Use 'mysql2/promise' for async/await support

// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Boonpleng#2002',
    database: 'SIIT_Tabletop_Club',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

// Query
let getAll = async () => {
    const connection = await pool.getConnection();
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `member`');
        return rows;
    } catch (err) {
        throw err;
    } finally {
        connection.release();
    }
}

let getByID = async (std_id) => {
    const connection = await pool.getConnection();
    try {
        const query = 'SELECT * FROM `member` where std_id = ?';
        const [rows] = await connection.query(query, [std_id]);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        connection.release();
    }
}

let add = async (std_id, password, name, tel, curriculum) => {
    const connection = await pool.getConnection();
    try {
        const query = "INSERT INTO member (std_id, password, name, tel, curriculum) VALUES (?, ?, ?, ?, ?)";
        const [rows] = await connection.query(query, [std_id, password, name, tel, curriculum]);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        connection.release();
    }
}

let deleteByID = async (std_id) => {
    const connection = await pool.getConnection();
    try {
        const query = 'DELETE FROM `member` where std_id = ?';
        const [rows] = await connection.query(query, [std_id]);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        connection.release();
    }
}

export default { getAll, getByID, add, deleteByID };
