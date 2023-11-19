import reservationModel from "../model/reservationModel.js"

let getAll = async (req, res) => {
    try {
        const result = await reservationModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await reservationModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByStd = async (req, res) => {
    try {
        const result = await reservationModel.getByStdID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getByGame = async (req, res) => {
    try {
        const result = await reservationModel.getByGameID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await reservationModel.add(req.body.r_id, req.body.r_date, req.body.r_time, req.body.r_std_id, req.body.r_b_name, req.body.r_cancel)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let put = async (req, res) => {
    try {
        await reservationModel.updateByID(req.body.r_id, req.body.r_date, req.body.r_time, req.params.r_std_id, req.body.r_b_name, req.body.r_cancel)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

let del = async (req, res) => {
    try {
        await reservationModel.deleteByID(req.params.r_std_id, req.body.r_id)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, getByStd, getByGame, post, put, del }