const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Enter article title'],
    },
    content: {
      type: String,
      required: [true, 'Enter content'],
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
