const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Password2303!', {
    dialect : 'mysql', 
    host: 'localhost'
    });

    module.exports = sequelize;