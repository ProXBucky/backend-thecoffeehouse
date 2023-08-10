'use strict';
const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Stores extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Stores.hasMany(models.ImageStore, { foreignKey: 'storeId', as: 'imageData' })
            Stores.belongsTo(models.Allcodes, { foreignKey: 'cityId', targetKey: 'keyMap', as: "cityData" })
        }
    }
    Stores.init({
        nameStore: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.TEXT,
        cityId: DataTypes.STRING,
        shortDescription: DataTypes.TEXT,
        mapLink: DataTypes.TEXT,
        mapHTML: DataTypes.TEXT

    }, {
        sequelize,
        modelName: 'Stores',
        freezeTableName: true
    });
    return Stores;
};