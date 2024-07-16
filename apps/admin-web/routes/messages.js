const express = require('express');
const {AmoApiClient, AmoJoScopeClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {Message} = require('../../../models');

const {domain, accessToken, scopeId} = config.account;
const {secretKey} = config.channel;

const router = express.Router();

router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.render('messages', {messages});
});

router.get('/:messageId/markRead', async (req, res) => {
  const messageId = req.params.messageId;

  const amojoClient = new AmoJoScopeClient({scopeId, channelSecret: secretKey, debug: true});
  
  const response = await amojoClient.updateMessageStatus(messageId, 2);
  console.log('response', response);
  res.redirect('/messages');
});

module.exports = router;
