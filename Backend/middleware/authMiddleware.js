let notLoggedIn = (req, res, next) => {
    if (!req.session.userID) {
        return res.status(200).json({ message: "Please log in" })
    } 
    next()
}

export default { notLoggedIn }