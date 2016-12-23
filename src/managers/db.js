import Sequelize from 'sequelize';
import appConfig from '../../conf/app.json';

const dbConfig = appConfig.db;

const db = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
    dialect: dbConfig.type,
    logging: false
});

export default db;
