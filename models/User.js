const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  favBooks: {
    type: Array,
  },
  admin: {
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
