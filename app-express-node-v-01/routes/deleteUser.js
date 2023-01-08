const { User } = require('../views/db/sequelize');

module.exports = app => {
  app.delete('/users/:id', (req, res) => {
    User.findByPk(req.params.id).then(user => {
      const deletedUser = user;
      User.destroy({
        where: { id: user.id },
      }).then(_ => {
        const message = `L\'utilisateur a bien été supprimé.`;
        res.json({ message, data: deletedUser });
      });
    });
  });
};
