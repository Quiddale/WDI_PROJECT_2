const express                = require('express');
const router                 = express.Router();
const registrationController = require('../controllers/registrations');
const sessionController      = require('../controllers/sessions');
const comics                 = require('../controllers/comics');
const comments               = require('../controllers/comments');
const users                  = require('../controllers/users');
const statics                = require('../controllers/statics');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in to view this content');
      res.redirect('/login');
    });
  }
  return next();
}

router.route('/')
.get(statics.homepage);

router.route('/comics')
.get(comics.index)
.post(secureRoute, comics.create);

router.route('/comics/new')
  .get(secureRoute, comics.new);

router.route('/comics/:id')
.get(comics.show)
.post(secureRoute, comments.create)
.post(secureRoute, comics.update)
.delete(secureRoute, comics.delete);

router.route('/comics/:id/edit')
.get(comics.edit);

router.route('/comics/:comicId/comments/:commentId')
.delete(comments.delete);

router.route('/register')
.get(registrationController.new)
.post(registrationController.create);

router.route('/login')
.get(sessionController.new)
.post(sessionController.create);

router.route('/logout')
.get(sessionController.delete);

router.route('/users/:id')
.get(users.show)
.put(secureRoute, comics.update)
.delete(secureRoute, comics.delete);

module.exports = router;
