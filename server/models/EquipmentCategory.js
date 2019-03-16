const Sequelize = require('sequelize');

module.exports = sequelize.define('equipment_category', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});