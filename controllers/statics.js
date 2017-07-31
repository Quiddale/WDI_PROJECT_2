const User = require('../models/user');
const Icon = require('../models/icon');

function staticsHomepage(req, res) {
  // res.render('statics/homepage');
  //   User
  //   .find()
  //   .exec()
  //   .then((users) => res.render('statics/homepage', { users }));
  // }
  Icon
  .find()
  .exec()
  .then((icons) => res.render('statics/homepage', { icons: icons }));
}

function staticsShow(req, res) {
  res.render('statics/show');
}



module.exports = {
  homepage: staticsHomepage,
  show: staticsShow
};
