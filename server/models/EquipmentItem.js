const Sequelize = require('sequelize');

module.exports = sequelize.define('equipment_item', {
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
      model: User,
      key: 'id'
    }
  },
  equipment_item_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false
    references: {
      model: EquipmentItemType,
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
  }
});