'use strict';
const {
    Model
} = require('sequelize');
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class ImageStore extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    }
    ImageStore.init({
        storeCode: DataTypes.UUID,
        image: DataTypes.BLOB('long'),
    }, {
        sequelize,
        modelName: 'ImageStore',
        freezeTableName: true
    });
    return ImageStore;
};