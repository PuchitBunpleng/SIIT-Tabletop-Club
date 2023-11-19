let notLoggedIn = (req, res) => {
    if (!req.session.userID) {
        return res.status(200).json({ message: "Please log in" })
    } else if (req.session.userID != req.params.id) {
        return res.status(403).json({ message: "Forbidden" })
    }
}

export default { notLoggedIn }