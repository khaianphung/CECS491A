'use strict';

require('../helpers/DateToMySqlFormat.js');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      { id: 1, username: 'dpan216', password: 'password12345', email: 'danthegoofygoober@gmail.com', status: 'Active', first_name: 'Daniel', last_name: 'Pan', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 2, username: 'foobar123', password: 'password12345', email: 'foobar@gmail.com', status: 'Inactive', first_name: 'Foo', last_name: 'Bar', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 3, username: 'swagster098', password: 'password12345', email: 'swagster@gmail.com', status: 'Active', first_name: 'Billy', last_name: 'Jean', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 4, username: 'jamster', password: 'password12345', email: 'jamster@gmail.com', status: 'Inactive', first_name: 'Jamie', last_name: 'Tess', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 5, username: 'jpotter', password: 'password12345', email: 'jpotter@gmail.com', status: 'Active', first_name: 'Johnny', last_name: 'Potter', created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  }
};