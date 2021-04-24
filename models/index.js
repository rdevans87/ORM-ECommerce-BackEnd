// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Defines a Category having many Products to create multiple foreign keys in the 'Product' table
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Defines a Category association starting with a Product
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Product is associated with many Tags 
 Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'category_id',
 }),

// Tags associated with many Products 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'category_id',
});

//Package four models and export them as an object to import proper names
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
