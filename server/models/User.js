const Sequelize = require('sequelize');

module.exports = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(255),
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },  
  email: {
    type: Sequelize.STRING(255),
    unique: true,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: 'Active'
  },
  firstName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});