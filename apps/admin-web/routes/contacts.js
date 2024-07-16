const express = require('express');
const {AmoApiClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {domain, accessToken} = config.account;

const router = express.Router();

router.get('/', async (req, res) => {
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const response = await amoApiClient.getContacts();
  console.log('response', response);

  const contacts = response._embedded.contacts;
  res.render('contacts', {contacts});
});

router.get('/:contactId/chats', async (req, res) => {
  const contactId = req.params.contactId;
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const contact = await amoApiClient.getContact(contactId);
  console.log('contact', contact);

  const r = await amoApiClient.getContactsChats([contactId]);
  const chats = r._embedded.chats;
  console.log('response', chats);

  
  res.render('contactChats', {contact, chats});
});
module.exports = router;
