module.exports = (sequelize, DataTypes) => {
  const EquipmentItem = sequelize.define('EquipmentItem', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    // userId: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: true,
    //   references: {
    //     model: 'User',
    //     key: 'id'
    //   }
    // },
    // equipmentItemTypeId: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   references: {
    //     model: 'EquipmentItemType',
    //     key: 'id'
    //   }    
    // },
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
    // EquipmentItem.belongsTo(models.EquipmentItemType, {
    //   foreignKey: 'equipmentItemTypeId'
    // });
  //   // EquipmentItem.belongsTo(models.User, {
  //   //   foreignKey: ''
  //   // });
  }
  return EquipmentItem;
};
