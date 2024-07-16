const express = require('express');
const {AmoApiClient, AmoJoScopeClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {domain, accessToken, scopeId} = config.account;
const {secretKey} = config.channel;

const router = express.Router();

router.get('/:contactId/:chatId/sendText', async (req, res) => {
  const contactId = req.params.contactId;
  const chatId = req.params.chatId;
  try {
    const amojoClient = new AmoJoScopeClient({scopeId, channelSecret: secretKey, debug: true});

    const payload = amojoClient.getTextPayloadFromContact({
      conversationId: chatId,
      message: 'test text message',
      senderName: 'test name sender',
    });
    console.log('payload', payload);
    const response = await amojoClient.sendMessage(payload);
    console.log('response', response);
  } catch (err) {
    console.log('err', err);
  } finally {
    res.redirect('/contacts/' + contactId + '/chats');
  }
});

router.get('/addNewAndSendText', async (req, res) => {
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const response1 = await amoApiClient.getContacts();
  console.log('response', response1);

  const contacts = response1._embedded.contacts;

  const response2 = await amoApiClient.getUsers();
  console.log('response', response2);

  const users = response2._embedded.users;

  res.render('chatsNew', {contacts, users});
});

router.post('/addNewAndSendText', async (req, res) => {
  console.log('rrrr', req.body);

  const amojoUserId = req.body.amojoUserId;
  const contactId = req.body.contactId;

  try {
    const amojoClient = new AmoJoScopeClient({scopeId, channelSecret: secretKey, debug: true});
    const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});

    const chatDto = amojoClient.getChatDto(amojoUserId);
    const chat = await amojoClient.createChat(chatDto);

    const attach = await amoApiClient.attachChatToContact(chat.id, Number(contactId));
    console.log('attach', JSON.stringify(attach));

    const payload = amojoClient.getTextPayloadFromContact({
      conversationId: chat.id,
      message: 'test text message',
      senderName: 'test name sender',
    });
    console.log('payload', payload);
    const response = await amojoClient.sendMessage(payload);
    console.log('response', response);
  } catch (err) {
    console.log('err', err);
  } finally {
    res.redirect('/contacts/' + contactId + '/chats');
  }
});


module.exports = router;
