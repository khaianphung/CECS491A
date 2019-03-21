'use strict';
require('../helpers/DateToMySqlFormat.js');
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var equipmentItemsList = [];
    for (var i = 0; i < 100; i++) {
      let newEquipmentItem = { 
                                id: i+1, 
                                userId: faker.random.number({ 'min': 1, 'max': 20 }), 
                                equipmentItemTypeId: faker.random.number({ 'min': 1, 'max': 20 }), 
                                itemCode: faker.random.uuid().slice(0,12),
                                isCheckedOut: faker.random.boolean(), 
                                createdAt: new Date().toMysqlFormat(), 
                                updatedAt: new Date().toMysqlFormat() }
      equipmentItemsList.push(newEquipmentItem);
    }  
    return queryInterface.bulkInsert('equipmentItems', equipmentItemsList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipmentItems', null);
  }
};
