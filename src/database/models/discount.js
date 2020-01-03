const Sequelize = require('sequelize');
const db = require('./index').sequelize;

const Discounts = db.define('discount', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
    couponName: {
    type: Sequelize.STRING,
  },
 couponAmout: {
    type: Sequelize.STRING,
  },
  active: {
      type : Sequelize.INTEGER
  }
   
})
Discounts.sync({force:true}).then(() => {
  console.log('discounts table created');
})
module.exports = Discounts;
