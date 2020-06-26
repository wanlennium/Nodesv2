const Sequelize = require('sequelize');

const sequelize = new Sequelize('user-data', 'root', 'Password2303!', {
    dialect : 'mysql', 
    host: 'localhost'
    });

    module.exports = sequelize;