const Sequelize = require('sequelize');
const db = require('./index').sequelize;
const Products = require('./product');

const ProductCategory = db.define('category', {
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

ProductCategory.hasMany(Products,{
  sourceKey:'id',
  foreignKey:'categoryId'
});
Products.belongsTo(ProductCategory,{
  sourceKey:'categoryId',
  foreignKey:'id'
})

// ProductCategory.sync({force : true}).then(() => {
//   console.log('category table created');
//  })

module.exports = ProductCategory;
