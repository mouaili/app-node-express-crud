const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../models/user');
const users = require('./user');

const sequelize = new Sequelize('discovery', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false,
});

const User = UserModel(sequelize, DataTypes);

console.log(User);

const initDB = () => {
  return sequelize.sync({ force: true }).then(() => {
    users.map(user => {
      User.create({
        name: user.name,
        job: user.job,
        address: user.address,
      }).then(user => console.log(user.toJSON()));
    });
  });
};

module.exports = {
  User,
  initDB,
};
