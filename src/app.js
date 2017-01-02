import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookie from 'cookie-parser';
import connectRedis from 'connect-redis';
import authCtrl from './controllers/auth';
import assetCtrl from './controllers/asset';
import userCtrl from './controllers/user';
import ensureAuthenticated from './middlewares/ensureAuthenticated';
import appConfig from '../conf/app.json';

const app = express();
const RedisStore = connectRedis(session);

app.set('port', appConfig.port);
app.use(bodyParser.json());
app.use(cookie(appConfig.cookieSecret));
app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379
    }),
    secret: appConfig.sessionSecret,
    resave: false,
    saveUninitialized: false
}));

app.use('/static', [
    express.static(path.resolve(__dirname, '../public/build')),
    express.static(path.resolve(__dirname, '../public/assets'))
]);

app.use('/api/auth', authCtrl);
app.all('/api/asset', ensureAuthenticated);
app.use('/api/asset', assetCtrl);
app.use('/api/user', userCtrl);

app.all('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/build/index.html'));
});

export default app;
