'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: "users",
          key: 'id'
        }
      },
      eventId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "events",
          key: 'id'
        }        
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userEvents');
  }
};