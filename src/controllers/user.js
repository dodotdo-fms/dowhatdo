import { Router } from 'express';
import User from '../models/user';
import errors from '../constants/error';
import appConfig from '../../conf/app.json';

const router = new Router();
const useridRegExp = /^[a-zA-Z_\d]{1,15}$/;
const passwordRegExp = /^[a-zA-Z_\d]{6,30}$/;

router.post('/', async (req, res) => {
    const accessToken = req.body.accessToken;
    const userid = req.body.userid;
    const password = req.body.password;
    const name = req.body.name;

    if (accessToken !== appConfig.accessToken) {
        res.status(401);
        res.json({ errorId: errors.INVALID_ACCESS_TOKEN });
        return;
    }

    if (!useridRegExp.test(userid)) {
        res.status(406);
        res.json({ errorId: errors.NOT_ACCEPTABLE_USERID });
        return;
    } else if (!passwordRegExp.test(password)) {
        res.status(406);
        res.json({ errorId: errors.NOT_ACCEPTABLE_PASSWORD });
        return;
    }

    await User.create({
        userid,
        password,
        name
    });

    res.sendStatus(200);
});


module.exports = router;
