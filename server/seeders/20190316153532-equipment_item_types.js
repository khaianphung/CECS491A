'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipment_item_types', [
      { id: 1, name: 'Hat', equipment_category_id: 1, description: 'This is a hat', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 2, name: 'T-Shirt', equipment_category_id: 2, description: 'This is a T-Shirt', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 3, name: 'External Battery', equipment_category_id: 3, description: 'This is an external battery', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 4, name: 'Laptop', equipment_category_id: 3, description: 'This is a laptop', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 5, name: 'iPhone', equipment_category_id: 3, description: 'This is an iPhone', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipment_item_types', null);
  }
};
