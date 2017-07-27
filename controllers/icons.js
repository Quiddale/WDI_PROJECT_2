const Icon = require('../models/icon');

function iconsShow(req, res) {
  console.log('hit');
  Icon
  .find()
  .then(icons => {
    res.json(icons);
  });
}

module.exports = {
  show: iconsShow
};
