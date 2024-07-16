const express = require('express');
const {AmoApiClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {AmoConversation} = require('../../../models');

const {domain, accessToken} = config.account;

const router = express.Router();

router.get('/', async (req, res) => {
  const conversations = await AmoConversation.find();

  res.render('conversations', {conversations});
});

module.exports = router;
