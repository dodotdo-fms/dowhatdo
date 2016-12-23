import Sequelize from 'sequelize';
import dbManager from '../managers/db';
import hardwareType from '../constants/hardwareType';

const HardwareModel = dbManager.define('hardware', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    type: {
        type: Sequelize.ENUM([
            hardwareType.DESKTOP,
            hardwareType.LAPTOP,
            hardwareType.TABLET,
            hardwareType.MOBILE,
            hardwareType.WATCH,
            hardwareType.MONITOR,
            hardwareType.ROUTER,
            hardwareType.KEYBOARD,
            hardwareType.MOUSE,
            hardwareType.OTHERS
        ]),
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    modelName: {
        type: Sequelize.STRING
    },

    macAddress: {
        type: Sequelize.STRING
    },

    manufacturer: {
        type: Sequelize.STRING
    },

    tag: {
        type: Sequelize.STRING
    },

    owner: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,

    classMethods: {
        parseInfo(info) {
            return {
                name: info.name,
                type: info.type || null,
                modelName: info.modelName || null,
                macAddress: info.macAddress || null,
                manufacturer: info.manufacturer || null,
                tag: info.tag || '',
                owner: info.owner || null
            };
        },

        buildNewHardware(hardwareInfo) {
            const newHardware = HardwareModel.build(hardwareInfo);
            return newHardware;
        }
    },

    instanceMethods: {
        isTypeNotValid() {}
    }
});

export default HardwareModel;
