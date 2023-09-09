'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ImageStore', 'storeId', {
      type: Sequelize.INTEGER, // Đổi kiểu dữ liệu thành STRING (hoặc kiểu dữ liệu mới)
      allowNull: true, // Customize allowNull as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ImageStore', 'storeId', {
      type: Sequelize.STRING, // Đổi lại kiểu dữ liệu ban đầu nếu cần (ví dụ: INTEGER)
      allowNull: true, // Customize allowNull as needed
    });
  },
};
