import memberModel from "../model/memberModel.js"


let post = async (req, res) => {
    try {
        const result = await memberModel.getByID(req.body.std_id)
        var password = req.body.password
        const inputpass = result[0].password
        if (password === inputpass) {
            const userID = result[0].std_id
            const core = result[0].core
            req.session.userID = userID
            req.session.core = core
            return res.sendStatus(200)
        }
        else {
            return res.status(403).json({message: "Incorrect password"})
        }
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

export default { post }