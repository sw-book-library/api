"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        static associate(models) {
            models.Book.hasMany(models.Reserve, {
                foreignKey: "bookId",
            });
        }
    }

    Book.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                required: true,
            },
            productionYear: DataTypes.STRING,
            author: DataTypes.STRING,
            description: DataTypes.STRING,
            category: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            code: DataTypes.INTEGER,
            publishingCompany: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Book",
            updatedAt: 'updatedAt',
            createdAt: 'createdAt',
        }
    );

    return Book;
};