const mongoose = require('mongoose');

const AmoConversationSchema = new mongoose.Schema({
  receiverId: String,
  receiverPhone: String,
  conversationId: String,
  sourceExternalId: String,
  channelCode: String,
});

module.exports = {
  AmoConversationSchema,
};
