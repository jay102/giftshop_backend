const Sequelize = require('sequelize');
const db = require('./index').sequelize;

const Products = db.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },

  productName: {
    type: Sequelize.STRING,
  },
  productPrice: {
    type: Sequelize.STRING,
  },
  productImage: {
    type: Sequelize.STRING,
  },
  productDesc: {
    type: Sequelize.STRING,
  },
  productCoupon: {
    type: Sequelize.STRING,
  },
  productPromo: {
    type: Sequelize.STRING,
  },
  categoryName: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  }
})
// Products.sync({ force: true }).then(() => {
//   console.log('products table created');
// })
module.exports = Products;
