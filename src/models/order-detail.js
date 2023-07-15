'use strict';
// const {
//     Model
// } = require('sequelize');
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
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
        orderId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        pricePerProduct: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'OrderDetail',
        freezeTableName: true
    });
    return OrderDetail;
};