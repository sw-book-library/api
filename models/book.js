const Sequelize = require('sequelize');
const database = require('../db');

module.exports = database.sequelize.define('Books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        required: true,
    },
    productionYear: Sequelize.STRING,
    author: Sequelize.STRING,
    description: Sequelize.STRING,
    category: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    code: Sequelize.INTEGER,
    publishingCompany: Sequelize.STRING,
}, {
    modelName: "Books",
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
});