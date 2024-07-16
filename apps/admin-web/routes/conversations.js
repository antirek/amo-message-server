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

router.get('/delete/:_id', async (req, res) => {
  const _id = req.params._id
  await AmoConversation.findOneAndDelete({_id: _id});

  res.redirect('/conversations');
});


module.exports = router;
