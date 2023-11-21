import bcrypt, { hash } from 'bcrypt'
import memberModel from "../model/memberModel.js"

let login = async (req, res) => {
    try {
        const result = await memberModel.getByID(req.body.std_id)
        const password = req.body.password
        const hashpassword = result[0].password
        const compare = await bcrypt.compare(password, hashpassword)
        if (compare) {
            const userID = result[0].std_id
            const core = result[0].core
            req.session.userID = userID.toString()
            req.session.core = core
            return res.sendStatus(200)
        }
        else {
            return res.status(403).json({message: "Incorrect password"})
        }
    } catch (err) {
        if(err.message === 'Cannot read properties of undefined (reading \'password\')'){
            return res.status(403).json({message: "User not found"})}
        else{return res.status(500).json(err.message)}
    }
}

let logout = (req, res) => {
    try {
        req.session.destroy()
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

export default { login, logout }