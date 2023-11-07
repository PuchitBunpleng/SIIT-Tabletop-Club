// get the client
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

// simple query
let getAll = async () => {
    const connection = await pool.getConnection();
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `member`');
        return rows;
    } catch (err) {
        console.error(err);
        return err;
    } finally {
        connection.release();
    }
}

export default { getAll };
