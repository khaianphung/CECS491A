const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
});

module.exports = User;