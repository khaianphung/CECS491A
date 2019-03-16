'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipment_items', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: "users",
          key: 'id'
        }
      },
      equipment_item_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "equipment_item_types",
          key: 'id'
        }    
      },
      item_code: {
        type: Sequelize.STRING(255),
        allowNull: false
      },  
      is_checked_out: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipment_items');
  }
};
