'use strict';
const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class ImageStore extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ImageStore.belongsTo(models.Stores, { foreignKey: 'storeId', as: 'storeData' })

        }
    }
    ImageStore.init({
        storeId: DataTypes.INTEGER,
        image: DataTypes.STRING,
        cloudId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'ImageStore',
        freezeTableName: true
    });
    return ImageStore;
};