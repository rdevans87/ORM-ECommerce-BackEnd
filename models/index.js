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
    // onDelete: 'CASCADE',
});

// Product is associated with many Tags 
 Product.belongsToMany(Tag, {
   through: ProductTag, 
   foreignKey: 'product_id',
  // through: { 
  //   model: ProductTag,
  // }
 });

// Tags associated with many Products 
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id',
  // through: {
  //   model: ProductTag,
  // }
  
});

//Package four models and export them as an object to import proper names
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.