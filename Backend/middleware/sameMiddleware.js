let sameUser = (req, res, next) => {
    if (req.session.userID !== req.params.id) {
        return res.status(403).json({ message: "Forbidden" })
    }
    next()
}

export default { sameUser }