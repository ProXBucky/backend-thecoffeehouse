'use strict';
// const {
//     Model
// } = require('sequelize');
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
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
        userId: DataTypes.INTEGER,
        totalPrice: DataTypes.INTEGER,
        statusPayment: DataTypes.STRING,
        timeOrder: DataTypes.DATE,
        orderCode: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Orders',
        freezeTableName: true
    });
    return Orders;
};