'use strict';

require('../helpers/DateToMySqlFormat.js');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      { id: 1, username: 'dpan216', password: 'password12345', email: 'danthegoofygoober@gmail.com', status: 'Active', firstName: 'Daniel', lastName: 'Pan', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 2, username: 'foobar123', password: 'password12345', email: 'foobar@gmail.com', status: 'Inactive', firstName: 'Foo', lastName: 'Bar', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 3, username: 'swagster098', password: 'password12345', email: 'swagster@gmail.com', status: 'Active', firstName: 'Billy', lastName: 'Jean', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 4, username: 'jamster', password: 'password12345', email: 'jamster@gmail.com', status: 'Inactive', firstName: 'Jamie', lastName: 'Tess', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 5, username: 'jpotter', password: 'password12345', email: 'jpotter@gmail.com', status: 'Active', firstName: 'Johnny', lastName: 'Potter', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  }
};