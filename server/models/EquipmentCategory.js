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
  return EquipmentCategory;
};
