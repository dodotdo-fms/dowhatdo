import Sequelize from 'sequelize';
import dbManager from '../managers/db';

const BookModel = dbManager.define('book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    isbn: {
        type: Sequelize.STRING,
        allowNull: false
    },

    author: {
        type: Sequelize.STRING
    },

    owner: {
        type: Sequelize.STRING
    },

    isRental: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    rentalDate: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false,

    classMethods: {
        parseInfo(info) {
            return {
                name: info.name,
                isbn: info.isbn,
                author: info.author || null,
                owner: info.owner || null,
                isRental: info.isRental,
                rentalDate: info.rentalDate || null
            };
        },

        buildNewBook(bookInfo) {
            const newBook = BookModel.build(Object.assign({}, bookInfo, {
                owner: null,
                isRental: false
            }));
            return newBook;
        }
    },

    instanceMethods: {
        async rental(owner, rentalDate) {
            return this.update({
                isRental: true,
                owner,
                rentalDate
            });
        },

        async return() {
            return this.update({
                isRental: false,
                owner: null,
                rentalDate: null
            });
        }
    }
});

export default BookModel;
