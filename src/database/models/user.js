const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('./index').sequelize;


const Users = db.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  role: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
}, {
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
           // console.log(user.password);
    },
    beforeUpdate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
           // console.log(user.password);
    },
      },
});
Users.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
Users.sync({ force: true }).then(() => {
  console.log('users table created');
});
module.exports = Users;
