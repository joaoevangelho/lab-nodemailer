const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending Confirmation", "Active"]
  },
  confirmationKey: {
    type: String,
    unique: true
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;