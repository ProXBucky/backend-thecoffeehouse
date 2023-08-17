'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Stores', {
            id: {
                primaryKey: true,
                type: Sequelize.STRING
            },
            nameStore: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            cityId: {
                type: Sequelize.STRING
            },
            shortDescription: {
                type: Sequelize.TEXT
            },
            mapLink: {
                type: Sequelize.TEXT
            },
            mapHTML: {
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Stores');
    }
};