'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipmentItems', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: "users",
          key: 'id'
        }
      },
      equipmentItemTypeId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "equipmentItemTypes",
          key: 'id'
        }    
      },
      itemCode: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
      },  
      isCheckedOut: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipmentItems');
  }
};
