'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            //     userId: DataTypes.INTEGER,
            // totalPrice: DataTypes.INTEGER,
            // statusPayment: DataTypes.STRING,
            // timeOrder: DataTypes.DATETIME,
            // orderCode: DataTypes.STRING
            userId: {
                type: Sequelize.INTEGER,
                isNull: false

            },
            totalPrice: {
                type: Sequelize.INTEGER,
                isNull: false
            },
            statusPayment: {
                type: Sequelize.STRING,
                isNull: false
            },
            timeOrder: {
                type: Sequelize.DATE,
                isNull: false
            },
            orderCode: {
                type: Sequelize.STRING,
                isNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Orders');
    }
};