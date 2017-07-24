const Comic = require('../models/comics');

function commentsCreate(req, res) {
  Comic
  .findById(req.params.id)
  .exec()
  .then(comic => {
    req.body.user = req.user._id;

    comic.comments.push(req.body);
    comic.save();

    res.redirect(`/comics/${comic._id}`);
  });
}

function commentsDelete (req, res) {

}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
