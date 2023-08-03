'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Allcodes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Allcodes.hasOne(models.Products, { foreignKey: 'category', as: 'categoryData' });
            Allcodes.hasOne(models.Products, { foreignKey: 'size', as: 'sizeData' });
        }
    }
    Allcodes.init({
        type: DataTypes.STRING,
        keyMap: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVn: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Allcodes',
        freezeTableName: true
    });
    return Allcodes;
};