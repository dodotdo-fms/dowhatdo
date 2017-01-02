import Sequelize from 'sequelize';
import dbManager from '../managers/db';

const UserModel = dbManager.define('user', {
    userid: {
        type: Sequelize.STRING,
        primaryKey: true
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,

    instanceMethods: {
        comparePassword(password) {
            return this.password === password;
        }
    }
});

export default UserModel;
