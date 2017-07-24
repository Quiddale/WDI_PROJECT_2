const User = require('../models/user');

function sessionsNew(req, res) {
  return res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
  .create(req.body)
  .then(user => {
    req.flash('info', `Thank you for registering ${user.username}`);
    req.session.userId = user._id;
    res.redirect('/');
  });
}

function sessionsDelete (req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
