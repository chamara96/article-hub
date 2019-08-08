const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    author: {
      type: mongoose.Schema.types.ObectId,
      required: true,
      ref: 'User'
    },
    comments: [
      {
        type: mongoose.Schema.types.ObectId,
        required: false,
        ref: 'Comment'
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);