'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
      { id: 1, name: 'Event 1', address: '611 N. Essex Street Newnan, GA 30263', locationName: 'Globe Theatre', city: 'Newnan', country: 'United States', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-92646.jpg', price: 0, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 2, name: 'Event 2', address: '451 Winchester Street Pueblo, CO 81001', locationName: 'Globe Theatre', city: 'Winchester', country: 'United States', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'people-show-chairs-gym.jpg', price: 20, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 3, name: 'Event 3', address: '641 Valley Farms Rd. New Hyde Park, NY 11040', locationName: 'Globe Theatre', city: 'Hyde Park', country: 'United States', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-159524.jpg', price: 40, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 4, name: 'Event 4', address: '9957 North Selby Ave. Norwalk, CT 06851', locationName: 'Globe Theatre', city: 'Norwalk', country: 'United States', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-270085.jpg', price: 30, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 5, name: 'Event 5', address: '31 N. Race St. Mc Lean, VA 22101', locationName: 'Globe Theatre', city: 'Race', country: 'Chile', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-722562.jpg', price: 0, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 6, name: 'Event 6', address: '53 N. Lexington Drive Xenia, OH 45385', locationName: 'Globe Theatre', city: 'Xenia', country: 'United States', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-1035665.jpg', price: 20, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 7, name: 'Event 7', address: '8888 S. Gonzales Street Philadelphia, PA 19111', locationName: 'Globe Theatre', city: 'Gonzales', country: 'United States', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-1578317.jpg', price: 0, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 8, name: 'Event 8', address: '453 Brewery Court Oxford, MS 38655', locationName: 'Globe Theatre', city: 'Oxford', country: 'Austrailia', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-1683292.jpg', price: 10, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 9, name: 'Event 9', address: '7315 East Hanover Rd. Gurnee, IL 60031', locationName: 'Globe Theatre', city: 'Gurnee', country: 'Canada', time: new Date().toMysqlFormat(), date: new Date().toMysqlFormat(), pictureUrl: 'pexels-photo-1713080.jpg', price: 90, description: 'This is a description', createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null);
  }
};
