let coreCheck = (req, res, next) => {
    if (!(req.session.core === 1)) {
        return res.status(403).json({ message: "Forbidden" })
    }
    next()
}

export default { coreCheck }