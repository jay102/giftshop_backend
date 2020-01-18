const Sequelize = require('sequelize');
const db = require('./index').sequelize;
const Products = require('./product');

const ProductCategory = db.define('productCategory', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  categoryName: {
    type: Sequelize.STRING,
  },
  
  categoryImage: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  }
  
}, 
{
  freezeTableName : true
}
)

ProductCategory.hasMany(Products, {
  sourceKey: "categoryName",
  foreignKey: "categoryName"
})
Products.belongsTo(ProductCategory,
  {
    sourceKey: "categoryName",
    foreignKey: "categoryName"
  })

// ProductCategory.sync({force : true}).then(() => {
//   console.log('product-category table created');
//  })

module.exports = ProductCategory;
