import memberModel from "../model/memberModel.js";

let GET = async (req, res) => {
    const result = await memberModel.getAll();
    return res.json(result);
}

export default { GET }