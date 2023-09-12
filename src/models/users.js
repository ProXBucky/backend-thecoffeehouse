'use strict';
const {
    Model
} = require('sequelize');
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Users.hasMany(models.Orders, { foreignKey: 'userId', as: 'UserData' })
            Users.belongsTo(models.Allcodes, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })

        }
    }
    Users.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        roleId: DataTypes.STRING,
        isApproved: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Users',
        freezeTableName: true
    });
    return Users;
};