const Sequelize = require('sequelize');

module.exports = sequelize.define('equipment_item_type', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  equipment_category_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false
    references: {
      model: EquipmentItemCategory,
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
  }
});