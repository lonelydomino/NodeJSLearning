const Sequelize = require('sequelize')

const sequelize = new Sequelize('new_schema', 'root', 'root', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize