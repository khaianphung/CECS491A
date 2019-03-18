module.exports = (sequelize, DataTypes) => {
  const EquipmentItem = sequelize.define('EquipmentItem', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    itemCode: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },  
    isCheckedOut: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  EquipmentItem.associate = function (models) {
    EquipmentItem.belongsTo(models.EquipmentItemType);
  }
  return EquipmentItem;
};
