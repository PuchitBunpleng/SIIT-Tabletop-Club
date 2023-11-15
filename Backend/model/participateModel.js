import mysql from 'mysql2/promise' // Use 'mysql2/promise' for async/await support

// create the connection to database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

// Query
let getAll = async () => {
    const connection = await pool.getConnection()
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `participate`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (p_std_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `participate` WHERE p_std_id = ?'
        const [rows] = await connection.query(query, [p_std_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByeID = async (p_e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `participate` WHERE p_e_name = ?'
        const [rows] = await connection.query(query, [p_e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}


let add = async (p_std_id,p_e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO participate (p_std_id,p_e_name) VALUES (?, ?)"
        const [rows] = await connection.query(query, [p_std_id,p_e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (p_std_id,p_e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `participate` where p_std_id = ? AND p_e_name = ?'
        const [rows] = await connection.query(query, [p_std_id,p_e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, getByeID, add, deleteByID }
