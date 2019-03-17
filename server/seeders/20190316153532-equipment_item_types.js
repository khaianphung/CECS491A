'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipmentItemTypes', [
      { id: 1, name: 'Hat', equipmentCategoryId: 1, description: 'This is a hat', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 2, name: 'T-Shirt', equipmentCategoryId: 2, description: 'This is a T-Shirt', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 3, name: 'External Battery', equipmentCategoryId: 3, description: 'This is an external battery', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 4, name: 'Laptop', equipmentCategoryId: 3, description: 'This is a laptop', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 5, name: 'iPhone', equipmentCategoryId: 3, description: 'This is an iPhone', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipmentItemTypes', null);
  }
};
