const { Sequelize } = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  emmail: {
    type: Sequelize.STRING,
  }
})

module.exports = User