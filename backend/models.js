const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const messageSchema = new mongoose.Schema({
  sender: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

const assignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = {
  User,
  Message,
  Assignment,
};
