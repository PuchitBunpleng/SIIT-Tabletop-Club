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
        const [rows, fields] = await connection.execute('SELECT * FROM `person`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (person_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `person` WHERE person_id = ?'
        const [rows] = await connection.query(query, [person_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let add = async (person_id, name, tel, curriculum) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO person (person_id, name, tel, curriculum) VALUES (?, ?, ?, ?)"
        const [rows] = await connection.query(query, [person_id, name, tel, curriculum])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let updateByID = async (person_id, name, tel, curriculum) => {
    const connection = await pool.getConnection()
    try {
        const query = "UPDATE person SET person_id = ?, name = ?, tel = ?, curriculum = ? WHERE person_id = ?"
        const [rows] = await connection.query(query, [person_id, name, tel, curriculum, person_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (person_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `person` where person_id = ?'
        const [rows] = await connection.query(query, [person_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, add, updateByID, deleteByID }
