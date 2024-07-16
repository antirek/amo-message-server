const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

const connection = mongoose.createConnection(config.get('mongodb'));

const {AmoConversationSchema} = require('./AmoConversation');
const {MessageSchema} = require('./Message');

const AmoConversation = connection.model('AmoConversation', AmoConversationSchema);
const Message = connection.model('Message', MessageSchema);

module.exports = {
  AmoConversation,
  Message,
};
