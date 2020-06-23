const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('çartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;