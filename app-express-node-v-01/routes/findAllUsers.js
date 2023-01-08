const { User } = require('../views/db/sequelize');
console.log(User);

module.exports = app => {
  app.get('/users', (request, response, next) => {
    User.findAll().then(users => {
      const message = `La liste est chargée correctement`;
      response.json({ message: message, data: users });
    });
  });
};
