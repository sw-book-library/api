'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable("Books", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        required: true
      },
      productionYear: Sequelize.STRING,
      author: Sequelize.STRING,
      description: Sequelize.STRING,
      category: Sequelize.STRING,
      active: Sequelize.BOOLEAN
    });
   },

   async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Books")
   }
 };
