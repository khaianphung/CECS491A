'use strict';
require('../helpers/DateToMySqlFormat.js');
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var userEventList = [];
    for (var i = 0; i < 20; i++) {
      let newUserEvent = { 
                            id: i+1, 
                            userId: faker.random.number({ 'min': 1, 'max': 20 }), 
                            eventId: faker.random.number({ 'min': 1, 'max': 5 }) 
                          };
      userEventList.push(newUserEvent);
    }
    return queryInterface.bulkInsert('userEvents', userEventList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userEvents', null); 
  }
};
