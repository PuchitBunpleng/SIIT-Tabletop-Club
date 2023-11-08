import memberModel from "../model/memberModel.js";

let getAll = async (req, res) => {
    const result = await memberModel.getAll();
    return res.json(result);
}

let get = async (req, res) => {
    const result = await memberModel.getByID(req.params.std_id);
    return res.json(result);
}

let post = async (req, res) => {
    await memberModel.add(req.body.std_id, req.body.password, req.body.name, req.body.tel, req.body.curriculum);
    return res.status(200);
}

let del = async (req, res) => {
    try {
        await memberModel.deleteByID(req.params.id);
        return res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(500);
    }
    
}

export default { getAll, get, post, del }