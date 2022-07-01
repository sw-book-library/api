"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Reserve, {
        foreignKey: "userId",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      registration: {
        type: DataTypes.INTEGER,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
      },
      date: {
        type: DataTypes.DATE,
        default: Date.now,
        required: false
      },
      occupation: {
        type: DataTypes.ENUM("admin", "teacher", "student"),
        default: "student",
        required: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
    }
  );

  return User;
};