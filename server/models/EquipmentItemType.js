module.exports = (sequelize, DataTypes) => {
  const EquipmentItemType = sequelize.define('EquipmentItemType', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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

  EquipmentItemType.associate = function (models) {
    EquipmentItemType.hasMany(models.EquipmentItem);
    EquipmentItemType.belongsTo(models.EquipmentCategory);
  }
  return EquipmentItemType;
};
