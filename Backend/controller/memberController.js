import memberModel from "../model/memberModel.js"
import bcrypt from 'bcrypt'

let getAll = async (req, res) => {
    try {
        const result = await memberModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await memberModel.getByIDwithoutPass(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    const password = req.body.password
    try {
        const result = await memberModel.getByID(req.body.std_id)
        if (result[0]?.std_id) {
            return res.status(500).json({ message: "Duplicate student ID" })
        }
        const hashpassword = await bcrypt.hash(password, 10)
        await memberModel.add(req.body.std_id, hashpassword, req.body.name, req.body.tel, req.body.curriculum, req.body.core)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    const password = req.body.password
    try {
        const hashpassword = await bcrypt.hash(password, 10)
        await memberModel.updateByID(req.body.std_id, hashpassword, req.body.name, req.body.tel, req.body.curriculum, req.body.core)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

let del = async (req, res) => {
    try {
        await memberModel.deleteByID(req.params.id)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, post, put, del }