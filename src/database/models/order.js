const Sequelize = require('sequelize');
const db = require('./index').sequelize;

const Orders = db.define('order', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  orderId: {
    type: Sequelize.STRING,
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
Orders.sync({force:true}).then(() => {
  console.log('orders table created');
})
module.exports = Orders;
