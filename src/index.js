import 'babel-polyfill';
import http from 'http';
import pushService from './services/push';
import dbManager from './managers/db';
import app from './app';
import logger from './utils/logger';

const server = http.createServer(app);

pushService.init(server);

dbManager.sync().then(() => {
    server.listen(app.get('port'), () => {
        logger.info(`Server listening on ${app.get('port')}`);
    });
});
