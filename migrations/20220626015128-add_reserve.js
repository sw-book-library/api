'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Reserves", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      scheduledDate: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Date.now

      },
      returnDate: {
        type: Sequelize.DATE,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Reserves")
  }
};