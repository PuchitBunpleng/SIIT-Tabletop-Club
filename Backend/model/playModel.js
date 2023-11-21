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
        const [rows, fields] = await connection.execute('SELECT * FROM `play`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (play_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `play` WHERE play_id = ?'
        const [rows] = await connection.query(query, [play_id])
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByStdID = async (std_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `play` WHERE std_id = ?'
        const [rows] = await connection.query(query, [std_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByGameID = async (b_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `play` WHERE b_name = ?'
        const [rows] = await connection.query(query, [b_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByDate = async (date) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `play` WHERE date = ?'
        const [rows] = await connection.query(query, [date])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let add = async (std_id, b_name, date, start_time, end_time) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO play (std_id, b_name, date, start_time, end_time) VALUES (?, ?, ?, ?, ?)"
        const [rows] = await connection.query(query, [std_id, b_name, date, start_time, end_time])
        const query2 = "SELECT * from play ORDER BY play_id DESC LIMIT 1"
        const [rows2] = await connection.query(query2, [])
        return rows2[0].play_id
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let updateByID = async (std_id, b_name, date, start_time, end_time) => {
    const connection = await pool.getConnection()
    try {
        const query = "UPDATE play SET start_time = ?, end_time = ? WHERE std_id = ? AND b_name = ? AND date = ?"
        const [rows] = await connection.query(query, [start_time, end_time, std_id, b_name, date])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (std_id, b_name, date) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `play` WHERE std_id = ? AND b_name = ? AND date = ?'
        const [rows] = await connection.query(query, [std_id, b_name, date])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, getByDate, getByStdID, getByGameID, add, updateByID, deleteByID }
