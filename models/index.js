// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Defines a Category association starting with a Product
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

//Defines a Category having many Products to create multiple foreign keys in the 'Product' table
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product is associated through more than one Tags (through ProductTag)
 Product.belongsToMany(Tag, {

 }),
// Tags belongToMany Products (through ProductTag)

//Package four models and export them as an object to import proper names
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
