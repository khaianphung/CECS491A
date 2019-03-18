'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    locationName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pictureUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(510),
      allowNull: false,
    }
  });
  Event.associate = function(models) {
    // Event.hasMany(models.User);
    Event.belongsToMany(models.User, { through: 'UserEvent' });
    Event.hasMany(models.EquipmentItem);
    // associations can be defined here
  };
  return Event;
};