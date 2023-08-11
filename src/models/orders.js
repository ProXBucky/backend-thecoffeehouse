'use strict';
const {
    Model
} = require('sequelize');
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Orders.belongsTo(models.Users, { foreignKey: 'userId', as: 'UserData' })
            Orders.hasMany(models.OrderDetail, { foreignKey: 'orderId', as: 'OrderData' })
            Orders.belongsTo(models.Allcodes, { foreignKey: 'statusPayment', targetKey: 'keyMap', as: 'StatusData' })
        }
    }
    Orders.init({
        userId: DataTypes.INTEGER,
        totalPrice: DataTypes.INTEGER,
        statusPayment: DataTypes.STRING,
        timeOrder: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Orders',
        freezeTableName: true
    });
    return Orders;
};