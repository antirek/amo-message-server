const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

const connection = mongoose.createConnection(config.get('mongodb'));

const {AmoConversationSchema} = require('./AmoConversation');

const AmoConversation = connection.model('AmoConversation', AmoConversationSchema);

module.exports = {
  AmoConversation,
};
