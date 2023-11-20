let coreCheck = (req, res, next) => {
    if (!req.session.core) {
        return res.status(403).json({ message: "Not a core member" })
    }
    next()
}

export default { coreCheck }