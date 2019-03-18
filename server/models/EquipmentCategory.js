'use strict';
module.exports = (sequelize, DataTypes) => {
  const EquipmentCategory = sequelize.define('EquipmentCategory', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    }
  });
  EquipmentCategory.associate = function (models) {
    EquipmentCategory.hasMany(models.EquipmentItemType);
  }

  return EquipmentCategory;
};
