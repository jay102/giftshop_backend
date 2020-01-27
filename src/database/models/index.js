const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const ProductCategory = require ('./productCategory');
// const Discounts = require('./discount');
// const Products = require('./product');
// const Orders = require('./order');
// const Users = require('./user');


const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({force:true}).then(() => {
 console.log('tables are created');
     })



// ProductCategory.sync({force : true}).then(() => {
//    console.log('category table created');
//    })
//   Products.sync({ force: true }).then(() => {
// console.log('products table created');
//  })

//  Discounts.sync({force:true}).then(() => {
//   console.log('discounts table created');
// })
// Orders.sync({force:true}).then(() => {
//   console.log('orders table created');
// })
// Users.sync({ force: true }).then(() => {
//   console.log('users table created');
// });

module.exports = db;
