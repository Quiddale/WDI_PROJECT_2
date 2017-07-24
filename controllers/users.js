const User = require('../models/user');

function userShow(req, res) {
  User
  .find()
  .exec()
  .then(users => {
    res.render('index', { users });
  });

}
module.exports = {
  show: userShow
};
