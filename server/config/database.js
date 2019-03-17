const Sequelize = require('sequelize');
console.log("blah");

const sequelize = new Sequelize('GEMS', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  
  // define: {
  //   timestamps: false,
  //   underscored: true
  // },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
module.exports = sequelize;
global.sequelize = sequelize;