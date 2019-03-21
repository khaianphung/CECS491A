'use strict';
require('../helpers/DateToMySqlFormat.js');
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var equipmentCategoriesList = [];
    for (var i = 0; i < 5; i++) {
      let newEquipmentCategory = { 
                                    id: i+1, 
                                    name: faker.commerce.department(), 
                                    createdAt: new Date().toMysqlFormat(), 
                                    updatedAt: new Date().toMysqlFormat() 
                                  };
      equipmentCategoriesList.push(newEquipmentCategory);
    }
    return queryInterface.bulkInsert('equipmentCategories', equipmentCategoriesList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipmentCategories', null);
  }
};
