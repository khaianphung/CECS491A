'use strict';
require('../helpers/DateToMySqlFormat.js');
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var equipmentItemTypesList = [];
    for (var i = 0; i < 20; i++) {
      let newEquipmentItemType = { 
                                    id: i+1, 
                                    name: faker.commerce.productName(), 
                                    equipmentCategoryId: faker.random.number({ 'min': 1, 'max': 5 }), 
                                    description: faker.lorem.sentences(), 
                                    createdAt: new Date().toMysqlFormat(), 
                                    updatedAt: new Date().toMysqlFormat() 
                                 };
      equipmentItemTypesList.push(newEquipmentItemType);
    }
    return queryInterface.bulkInsert('equipmentItemTypes', equipmentItemTypesList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipmentItemTypes', null);
  }
};
