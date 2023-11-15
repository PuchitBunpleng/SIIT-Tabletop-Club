import participateModel from "../model/participateModel.js"

let getAll = async (req, res) => {
    try {
        const result = await participateModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await participateModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getBye = async (req, res) => {
    try {
        const result = await participateModel.getByeID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await participateModel.add(req.body.p_std_id, req.body.p_e_name)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let del = async (req, res) => {
    try {
        await participateModel.deleteByID(req.body.p_std_id, req.body.p_e_name)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, getBye, post, del }