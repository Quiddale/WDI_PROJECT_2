const mongoose = require('mongoose');

const iconSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issueNumber: { type: String },
  image: { type: String },
  Lat: { type: String, required: true },
  Lng: { type: String, required: true }
});

module.exports = mongoose.model('Icon', iconSchema);
