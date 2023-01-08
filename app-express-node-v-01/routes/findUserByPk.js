const { User } = require('../views/db/sequelize');

module.exports = app => {
  app.get('/users/:id', (req, res) => {
    User.findByPk(req.params.id).then(user => {
      const message = `L\'utilisateur ${user.name}  a bien été trouvé.`;
      res.json({ message, data: user });
    });
  });
};
