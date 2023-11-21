let notLoggedIn = (req, res, next) => {
    if (!req.session.userID) {
        return res.status(403).json({ message: "Please log in" })
    } 
    next()
}

export default { notLoggedIn }