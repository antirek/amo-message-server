const express = require('express');
const {AmoApiClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {domain, accessToken} = config.account;

const router = express.Router();

router.get('/', async (req, res) => {
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const response = await amoApiClient.getEvents();
  console.log('response', response);

  const events = response._embedded.events;
  res.render('events', {events});
});

module.exports = router;
