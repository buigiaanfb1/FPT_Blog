const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: 'Gia An',
  },
  slug: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model('post', PostSchema);
