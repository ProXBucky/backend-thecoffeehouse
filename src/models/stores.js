'use strict';
const {
    Model
} = require('sequelize');
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Stores extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Stores.init({
        nameStore: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.TEXT,
        cityId: DataTypes.STRING,
        storeId: DataTypes.UUID,
    }, {
        sequelize,
        modelName: 'Stores',
        freezeTableName: true
    });
    return Stores;
};