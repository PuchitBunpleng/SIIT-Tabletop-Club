import publicModel from "../model/publicModel.js"

let getAll = async (req, res) => {
    try {
        const result = await publicModel.getAll()
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let get = async (req, res) => {
    try {
        const result = await publicModel.getByID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let getBye = async (req, res) => {
    try {
        const result = await publicModel.getByeID(req.params.id)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err.message)
    }
     
}

let post = async (req, res) => {
    try {
        await publicModel.add(req.body.pp_person_id, req.body.pp_e_name)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

let del = async (req, res) => {
    try {
        await publicModel.deleteByID(req.body.pp_person_id, req.body.pp_e_name)
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json(err.message)
    }
    
}

export default { getAll, get, getBye, post, del }