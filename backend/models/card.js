const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field "name" should not be empty'],
    minlength: [2, 'Min length of "name" field - 2'],
    maxlength: [30, 'Max length of "name" field - 30'],
  },
  link: {
    type: String,
    required: [true, 'Field "link" should not be empty'],
    validate: {
      validator: (l) => validator.isURL(l),
      message: 'Некорректный URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Field "owner" should not be empty'],
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardSchema);
