'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
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
      registration :{
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
      },
      occupation: {
        type: Sequelize.ENUM("admin", "teacher", "student"),
        default: "student"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Users")
  }
};