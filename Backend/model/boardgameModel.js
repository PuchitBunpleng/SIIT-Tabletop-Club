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
        const [rows, fields] = await connection.execute('SELECT * FROM `boardgame`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (b_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `boardgame` WHERE b_name = ?'
        const [rows] = await connection.query(query, [b_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let add = async (b_name, description, store, weight, type) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO boardgame (b_name, description, store, weight, type) VALUES (?, ?, ?, ?, ?)"
        const [rows] = await connection.query(query, [b_name, description, store, weight, type])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let updateByID = async (b_name, description, store, weight, type) => {
    const connection = await pool.getConnection()
    try {
        const query = "UPDATE boardgame SET b_name = ?, description = ?, store = ?, weight = ?, type = ?, WHERE b_name = ?"
        const [rows] = await connection.query(query, [b_name, description, store, weight, type, b_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (b_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `boardgame` where b_name = ?'
        const [rows] = await connection.query(query, [b_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, add, updateByID, deleteByID }
