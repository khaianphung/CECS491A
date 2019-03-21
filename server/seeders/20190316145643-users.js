'use strict';

require('../helpers/DateToMySqlFormat.js');
var faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var usersList = [];
    for (var i = 0; i < 20; i++) {
      let newUser = { id: i+1, username: faker.internet.userName(), password: faker.internet.password(), email: faker.internet.email(), isActive: faker.random.boolean(), firstName: faker.name.firstName(), lastName: faker.name.lastName(), createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() };
      usersList.push(newUser);
    }

    return queryInterface.bulkInsert('users', usersList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  }
};