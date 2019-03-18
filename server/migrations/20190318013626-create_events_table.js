'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      locationName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pictureUrl: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(510),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE      
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};