const Sequelize = require('sequelize');
const database = require('../db');

module.exports = database.sequelize.define('Reserves', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    scheduledDate: {
        type: Sequelize.DATE,
        allowNull: true,
        default: Date.now

    },
    returnDate: {
        type: Sequelize.DATE,
    },
    bookId: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    modelName: "Reserves",
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    hooks: {
        beforeCount(options) {
            options.raw = true;
        }
    }
});

/*     class Reserve extends Model {
        static associate(models) {
            models.Reserve.hasOne(models.Book, {
                foreignKey: "bookId"
            });
            models.Reserve.hasOne(models.User, {
                foreignKey: "userId"
            });
        }
    } */