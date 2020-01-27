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
 couponAmount: {
    type: Sequelize.STRING,
  },
  active: {
      type : Sequelize.INTEGER
  },
  createdAt :{
    type:Sequelize.DATE
  },
  updatedAt :{
    type:Sequelize.DATE
  }
   
})
// Discounts.sync({force:true}).then(() => {
//   console.log('discounts table created');
// })
module.exports = Discounts;
