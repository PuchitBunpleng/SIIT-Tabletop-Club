import competitionModel from "../model/competitionModel.js"

let getAll = async (req, res) => {
    try {
        const result = await competitionModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await competitionModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByGame = async (req, res) => {
    try {
        const result = await competitionModel.getByGameID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await competitionModel.add(req.body.e_name, req.body.game)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let del = async (req, res) => {
    try {
        await competitionModel.deleteByID(req.body.e_name, req.body.game)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, getByGame, post, del }