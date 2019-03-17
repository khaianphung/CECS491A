module.exports = (sequelize, DataTypes) => {
  const EquipmentItemType = sequelize.define('EquipmentItemType', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    equipmentCategoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'EquipmentItemCategory',
        key: 'id'
      }    
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },  
    description: {
      type: DataTypes.STRING(510),
      allowNull: false
    }
  });
  return EquipmentItemType;
};