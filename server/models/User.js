module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },  
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'Active'
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }    
  });

  User.associate = function (models) {
    User.hasMany(models.EquipmentItem, {
      foreignKey: 'userID'
    });
  }

  return User;
};
