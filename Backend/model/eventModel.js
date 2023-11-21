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
        const [rows, fields] = await connection.execute('SELECT * FROM `event`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `event` WHERE e_name = ?'
        const [rows] = await connection.query(query, [e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let add = async (e_name, date, time, open_for_public) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO event (e_name, date, time, open_for_public) VALUES (?, ?, ?, ?)"
        const [rows] = await connection.query(query, [e_name, date, time, open_for_public])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let updateByID = async (e_name, date, time, open_for_public) => {
    const connection = await pool.getConnection()
    try {
        const query = "UPDATE event SET e_name = ?, date = ?, time = ?, open_for_public = ? WHERE e_name = ?"
        const [rows] = await connection.query(query, [e_name, date, time, open_for_public, e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `event` where e_name = ?'
        const [rows] = await connection.query(query, [e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, add, updateByID, deleteByID }
