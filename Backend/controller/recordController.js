import recordModel from "../model/recordModel.js"

let getAll = async (req, res) => {
    try {
        const result = await recordModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let getByID = async (req, res) => {
    try {
        const result = await recordModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let getByStd = async (req, res) => {
    try {
        const result = await recordModel.getByStdID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByGame = async (req, res) => {
    try {
        const result = await recordModel.getByGameID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByDate = async (req, res) => {
    try {
        const result = await recordModel.getByDate(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await recordModel.add(req.body.rec_id, req.body.winner, req.body.point)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    try {
        await recordModel.updateByID(req.body.record_id, req.body.b_name, req.body.date, req.body.winner, req.body.point)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

let del = async (req, res) => {
    try {
        await recordModel.deleteByID(req.params.id, req.body.b_name, req.body.date)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, getByID, getByDate, getByStd, getByGame, post, put, del }