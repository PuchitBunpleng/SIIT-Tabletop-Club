import playModel from "../model/playModel.js"

let getAll = async (req, res) => {
    try {
        const result = await playModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let getById = async (req, res) => {
    try {
        const result = await playModel.getByID(req.body.play_id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let getByStd = async (req, res) => {
    try {
        const result = await playModel.getByStdID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByGame = async (req, res) => {
    try {
        const result = await playModel.getByGameID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByDate = async (req, res) => {
    try {
        const result = await playModel.getByDate(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        const result = await playModel.add(req.session.userID, req.body.b_name, req.body.date, req.body.start_time, req.body.end_time)
        return res.status(200).json({play_id: result})
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    try {
        await playModel.updateByID(req.params.id, req.body.b_name, req.body.date, req.body.start_time, req.body.end_time)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

let del = async (req, res) => {
    try {
        await playModel.deleteByID(req.params.id, req.body.b_name, req.body.date)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, getById, getByDate, getByStd, getByGame, post, put, del }