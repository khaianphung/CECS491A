'use strict';
require('../helpers/DateToMySqlFormat.js');
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var eventsList = [];
    for (var i = 0; i < 20; i++) {
      let newEvent = { 
                        id: i+1, 
                        name: faker.lorem.words() + ' event', 
                        address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state(), 
                        locationName: faker.company.companyName(), 
                        city: faker.address.city(), 
                        country: faker.address.country(), 
                        time: new Date().toMysqlFormat(), 
                        date: new Date().toMysqlFormat(), 
                        pictureUrl: faker.image.image(), 
                        price: faker.random.number({ 'min': 0, 'max': 50 }), 
                        description: faker.lorem.sentences(), 
                        createdAt: new Date().toMysqlFormat(), 
                        updatedAt: new Date().toMysqlFormat() 
                     };
      eventsList.push(newEvent);
    }
    return queryInterface.bulkInsert('events', eventsList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null);
  }
};
