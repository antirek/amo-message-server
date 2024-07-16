const express = require('express');
const {AmoApiClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {domain, accessToken} = config.account;

const router = express.Router();

router.get('/', async (req, res) => {
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const response = await amoApiClient.getAccount({amojoId: true, version: true, driveUrl: true});
  console.log('response', response);

  const account = response;
  res.render('account', {account});
});

module.exports = router;
