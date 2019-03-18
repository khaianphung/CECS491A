'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipmentCategories', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipmentCategories');
  }
};
