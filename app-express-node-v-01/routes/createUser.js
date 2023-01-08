const { User } = require('../views/db/sequelize');

module.exports = app => {
  app.post('/users', (req, res) => {
    User.create(req.body).then(user => {
      const message = `Le nouveau utilisateur ${req.body.name} est rajouté à la liste`;
      res.json({ message, data: user });
    });
  });
};
