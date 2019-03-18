'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipmentItemTypes', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      equipmentCategoryId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "equipmentCategories",
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },  
      description: {
        type: Sequelize.STRING(510),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipmentItemTypes');
  }
};
