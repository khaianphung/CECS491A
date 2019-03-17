'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipmentCategories', [
      { id: 1, name: 'Headwear', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 2, name: 'Apparel', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 3, name: 'Electronics', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipmentCategories', null);
  }
};
