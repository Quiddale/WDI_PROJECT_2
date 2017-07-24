const Comic = require('../models/comics');

function comicsIndex(req, res, next) {
  Comic
    .find()
    .exec()
    .then((comics) => res.render('comics/index', { comics }))
    .catch(next);
}

function comicsCreate(req, res) {

}

function comicsNew(req, res) {

}

function comicsShow(req, res) {

}

function comicsUpdate(req, res) {

}

function comicsDelete(req, res) {

}

function comicsEdit(req, res) {

}

module.exports = {
  index: comicsIndex,
  create: comicsCreate,
  new: comicsNew,
  show: comicsShow,
  update: comicsUpdate,
  delete: comicsDelete,
  edit: comicsEdit
};
