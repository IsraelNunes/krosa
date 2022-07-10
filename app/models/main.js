const { Sequelize } = require('sequelize');

  const database = require('./../db');
  
  const Product = database.define('Product', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING
  }, {freezeTableName: true, timestamps: false});
  
module.exports = Product;