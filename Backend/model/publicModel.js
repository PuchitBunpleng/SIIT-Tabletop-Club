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
        const [rows, fields] = await connection.execute('SELECT * FROM `public_participate`')
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByID = async (pp_person_id) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `public_participate` WHERE pp_person_id = ?'
        const [rows] = await connection.query(query, [pp_person_id])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let getByeID = async (pp_e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'SELECT * FROM `public_participate` WHERE pp_e_name = ?'
        const [rows] = await connection.query(query, [pp_e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}


let add = async (pp_person_id,pp_e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = "INSERT INTO public_participate (pp_person_id,pp_e_name) VALUES (?, ?)"
        const [rows] = await connection.query(query, [pp_person_id,pp_e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

let deleteByID = async (pp_person_id,pp_e_name) => {
    const connection = await pool.getConnection()
    try {
        const query = 'DELETE FROM `public_participate` where pp_person_id = ? AND pp_e_name = ?'
        const [rows] = await connection.query(query, [pp_person_id,pp_e_name])
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.release()
    }
}

export default { getAll, getByID, getByeID, add, deleteByID }
