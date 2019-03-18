'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('userEvents', [
        { id: 1, userId: 1, eventId: 1 },
        { id: 2, userId: 1, eventId: 2 },
        { id: 3, userId: 1, eventId: 4 },
        { id: 4, userId: 2, eventId: 2 },
        { id: 5, userId: 2, eventId: 3 },
        { id: 6, userId: 2, eventId: 1 },
        { id: 7, userId: 3, eventId: 2 },
        { id: 8, userId: 3, eventId: 5 },
        { id: 9, userId: 3, eventId: 9 },
        { id: 10, userId: 3, eventId: 8 },
        { id: 11, userId: 4, eventId: 6 },
        { id: 12, userId: 4, eventId: 4 },
        { id: 13, userId: 4, eventId: 2 },
        { id: 14, userId: 5, eventId: 9 },
        { id: 15, userId: 5, eventId: 1 },
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userEvents', null); 
  }
};
