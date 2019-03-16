'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipment_categories', [
      { id: 1, name: 'Headwear', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 2, name: 'Apparel', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 3, name: 'Electronics', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipment_categories', null);
  }
};
