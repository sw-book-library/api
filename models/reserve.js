"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reserve extends Model {
    static associate(models) {
      models.Reserve.belongsTo(models.Book, {
        foreignKey: "bookId",
      });
      models.Reserve.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }

  Reserve.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      scheduledDate: {
        type: DataTypes.DATE,
        allowNull: true,
        default: Date.now,
      },
      returnDate: {
        type: DataTypes.DATE,
      },
      bookId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Reserve",
      updatedAt: "updatedAt",
      createdAt: "createdAt",
    }
  );

  return Reserve;
};
