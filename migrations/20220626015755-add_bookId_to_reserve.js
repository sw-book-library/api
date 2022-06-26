'use strict';

module.exports = {  
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "Reserves",
          "bookId",
          {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
          },
          { transaction: t }
          ),
        queryInterface.addColumn(
          "Reserves",
          "userId",
          {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
          },
          { transaction: t }
          )
        ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("Reserves", "bookId", { transaction: t }),
        queryInterface.removeColumn("Reserves", "userId", { transaction: t })
        ]);      
    });
  }
};
