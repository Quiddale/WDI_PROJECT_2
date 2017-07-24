const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const comicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: String },
  synopsis: { type: String },
  genre: { type: String },
  wikipedia: { type: String },
  images: [{ type: String }],
  comments: [commentSchema],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Comic', comicSchema);
