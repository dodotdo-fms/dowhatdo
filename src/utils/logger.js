import path from 'path';
import winston from 'winston';
import env from './env';

const level = env.isProduction() ? 'error' : 'debug';
const logPath = path.resolve(__dirname, '../../log');

const logger = new winston.Logger({
    level,
    transports: [
        new winston.transports.Console({ colorize: true }),
        new winston.transports.File({
            filename: `${logPath}/errors.log`,
            level: 'error'
        })
    ]
});

export default logger;
