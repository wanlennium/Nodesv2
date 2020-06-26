const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
   firstName: {
       type: Sequelize.STRING,
       allowNull: false     
   },
   lastName: {
       type: Sequelize.STRING,
       allowNull: false
   },
   email: {
        type: Sequelize.STRING,
        allowNull: false,
        validation: {
            isEmail: true,
        },    
   },
   password: {
       type: Sequelize.STRING,
       allowNull: false
   },
   isAdmin: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
   },
   isActive: {
       type: Sequelize.BOOLEAN,
       defaultValue: true
   },
   isBlock: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
   },
});

module.exports = User;