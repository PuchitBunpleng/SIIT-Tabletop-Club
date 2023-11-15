import personModel from "../model/personModel.js"

let getAll = async (req, res) => {
    try {
        const result = await personModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await personModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await personModel.add(req.body.person_id, req.body.name, req.body.tel, req.body.curriculum)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    try {
        await personModel.updateByID(req.body.person_id, req.body.name, req.body.tel, req.body.curriculum)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

let del = async (req, res) => {
    try {
        await personModel.deleteByID(req.params.id)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, post, put, del }