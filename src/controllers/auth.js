import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import User from '../models/user';
import errors from '../constants/error';

const router = new Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200);
    res.json(req.user);
});

router.post('/', async (req, res) => {
    const user = await User.findOne({ where: { userid: req.body.userid } });

    if (!user) {
        res.status(401);
        res.json({ errorId: errors.INVALID_USERID_OR_PASSWORD });
        return;
    }

    if (!user.comparePassword(req.body.password)) {
        res.status(401);
        res.json({ message: errors.INVALID_USERID_OR_PASSWORD });
        return;
    }

    req.session.user = {
        id: user.get('id'),
        userid: user.get('userid')
    };

    res.sendStatus(200);
});

router.delete('/', ensureAuthenticated, (req, res) => {
    req.session.destroy(() => {
        res.sendStatus(200);
    });
});

export default router;
