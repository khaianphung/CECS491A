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
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },  
  email: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  status: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: 'Active'
  },
  first_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});