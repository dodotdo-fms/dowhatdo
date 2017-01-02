function ensureAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401);
        res.json({ message: 'Unauthorized' });
    }
}

export default ensureAuthenticated;
