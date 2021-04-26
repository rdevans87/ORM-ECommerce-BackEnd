const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// define columns
ProductTag.init(
  {
   id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKEy: true,
    autoIncrement: true,
  },


















  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
