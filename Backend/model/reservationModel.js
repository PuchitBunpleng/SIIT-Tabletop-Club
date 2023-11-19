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
        const [rows, fields] = await connection.execute('SELECT * FROM `reservation`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (r_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `reservation` WHERE r_id = ?'
        const [rows] = await connection.query(query, [r_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByStdID = async (r_std_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `reservation` WHERE r_std_id = ?'
        const [rows] = await connection.query(query, [r_std_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByGameID = async (r_b_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `reservation` WHERE r_b_name = ?'
        const [rows] = await connection.query(query, [r_b_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let add = async (r_id, r_date, r_time, r_std_id, r_b_name, r_cancel) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO reservation (r_id, r_date, r_time, r_std_id, r_b_name, r_cancel) VALUES (?, ?, ?, ?, ?, ?)"
        const [rows] = await connection.query(query, [r_id, r_date, r_time, r_std_id, r_b_name, r_cancel])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let updateByID = async (r_id, r_date, r_time, r_std_id, r_b_name, r_cancel) => {
    const connection = await pool.getConnection()
    try {
        const query = "UPDATE reservation SET r_id = ?, r_date = ?, r_time = ?, r_std_id = ?, r_b_name = ?, r_cancel = ? WHERE r_id = ?"
        const [rows] = await connection.query(query, [r_id, r_date, r_time, r_std_id, r_b_name, r_cancel, r_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (r_std_id,r_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `reservation` where r_id = ? AND r_std_id = ?'
        const [rows] = await connection.query(query, [r_id,r_std_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, getByStdID, getByGameID, add, updateByID, deleteByID }
