'use strict';
// const {
//     Model
// } = require('sequelize');
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        category: DataTypes.STRING,
        size: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        originalPrice: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Products',
        freezeTableName: true
    });
    return Products;
};