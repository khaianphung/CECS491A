const Sequelize = require('sequelize');

module.exports = sequelize.define('equipmentItem', {
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
      model: User,
      key: 'id'
    }
  },
  equipmentItemTypeId: {
    type: Sequelize.INTEGER(11),
    allowNull: false
    references: {
      model: EquipmentItemType,
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
  }
});