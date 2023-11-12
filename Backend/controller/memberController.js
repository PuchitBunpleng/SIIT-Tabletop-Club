import memberModel from "../model/memberModel.js"

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
        const result = await memberModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await memberModel.add(req.body.std_id, req.body.password, req.body.name, req.body.tel, req.body.curriculum)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    try {
        await memberModel.updateByID(req.body.std_id, req.body.password, req.body.name, req.body.tel, req.body.curriculum)
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