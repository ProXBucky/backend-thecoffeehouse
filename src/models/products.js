'use strict';
const {
    Model
} = require('sequelize');
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Products.belongsTo(models.Allcodes, { foreignKey: 'category', targetKey: 'keyMap', as: 'categoryData' })
            // Products.belongsTo(models.Allcodes, { foreignKey: 'size', targetKey: 'keyMap', as: 'sizeData' })
            Products.hasOne(models.OrderDetail, { foreignKey: 'productId', as: 'ProductData' })

        }
    }
    Products.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        category: DataTypes.STRING,
        image: DataTypes.STRING,
        originalPrice: DataTypes.INTEGER,
        quantitySold: DataTypes.INTEGER,
        cloudId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Products',
        freezeTableName: true
    });
    return Products;
};