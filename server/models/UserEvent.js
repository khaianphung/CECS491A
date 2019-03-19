'use strict';
module.exports = (sequelize, DataTypes) => {
  const userEvent = sequelize.define('UserEvent', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: "users",
        key: 'id'
      }
    },
    eventId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: "events",
        key: 'id'
      }        
    }
  });
  // userEvent.associate = function(models) {
  //   // associations can be defined here
  // };
  return userEvent;
};