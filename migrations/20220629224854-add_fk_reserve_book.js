'use strict';

const reserve = require("../models/reserve");

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Reserves', 'bookId', {
        type: Sequelize.UUID,
        references: {
          model: 'Books',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        after: 'can_maintain_system'
      })
    ])
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Reserves', 'bookId'),
    ]);
  }
};
