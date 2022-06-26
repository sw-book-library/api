const Sequelize = require('sequelize');
const database = require('../db');

module.exports = database.sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  registration: {
    type: Sequelize.INTEGER,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    required: true,
  },
  date: {
    type: Sequelize.DATE,
    default: Date.now,
    required: false
  },
  occupation: {
    type: Sequelize.ENUM("admin", "teacher", "student"),
    default: "student",
    required: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  modelName: "Users",
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  hooks: {
    beforeCount(options) {
      options.raw = true;
    }
  }
});