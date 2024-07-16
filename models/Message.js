const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  messageId: String,
  type: String,
  text: String,
  time: String,
});

module.exports = {
  MessageSchema,
};
