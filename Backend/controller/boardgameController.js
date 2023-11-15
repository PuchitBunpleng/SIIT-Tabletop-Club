import boardgameModel from "../model/boardgameModel.js"

let getAll = async (req, res) => {
    try {
        const result = await boardgameModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await boardgameModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await boardgameModel.add(req.body.b_name, req.body.description, req.body.store, req.body.weight, req.body.type)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    try {
        await boardgameModel.updateByID(req.body.b_name, req.body.description, req.body.store, req.body.weight, req.body.type)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

let del = async (req, res) => {
    try {
        await boardgameModel.deleteByID(req.params.id)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, post, put, del }