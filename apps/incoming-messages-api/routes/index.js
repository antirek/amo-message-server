const express = require('express');

const {AmoConversation} = require('../../../models')

const router = express.Router();

router.post('/messages/:scopeId', async (req, res) => {
  const scopeId = req.params.scopeId;
  console.log('scopeId', scopeId);
  console.log('originalUrl', req.originalUrl);
  console.log('data:', req.body);

  res.send('OK');

  const data = req.body;
  const conversationId = data.message?.conversation?.id;
  const receiverId = data.message?.receiver?.id;
  const receiverPhone = data.message?.receiver?.phone;
  const sourceExternalId = data.message?.source?.external_id;

  let amoConversation;
  console.log('conversationId', conversationId);
  if (conversationId) {
    amoConversation = await AmoConversation.findOne({conversationId});
  }

  if (amoConversation) {
    console.log('amo conversation exist', JSON.stringify(amoConversation.toObject()));
  }

  if (!amoConversation) {
    console.log('not found conversation');
    const amoConversationData = {conversationId, receiverId, receiverPhone, sourceExternalId};
    console.log('amo conversation data', amoConversationData);
    amoConversation = await AmoConversation.create(amoConversationData);
    console.log('new amo conversation added');
  }

  
  
});

module.exports = router;
