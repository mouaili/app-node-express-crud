const { User } = require('../views/db/sequelize');

module.exports = app => {
  app.put('/users/:id', function (req, res) {
    const id = req.params.id;
    User.update(req.body, { where: { id: id } }).then(() => {
      User.findByPk(id).then(user => {
        const message = `L'utilisateur ${user.name} a bien été mis jour`;
        res.json({ message, data: user });
      });
    });
  });
};
