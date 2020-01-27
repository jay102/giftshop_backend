const Sequelize = require('sequelize');
const db = require('./index').sequelize;

const Orders = db.define('order', {
 
  orderId: {
    allowNull: false,
    type: Sequelize.STRING,
    primaryKey: true,
  },
  price: {
    type: Sequelize.STRING,
  },
 buyer: {
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
//  Orders.sync({force:true}).then(() => {
//  console.log('orders table created');
// })
module.exports = Orders;
