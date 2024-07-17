const express = require('express');
const {AmoApiClient} = require('@mobilon-dev/amotop');
const config = require('config');

const {domain, accessToken} = config.account;

const router = express.Router();

router.get('/', async (req, res) => {
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const response = await amoApiClient.getSources();
  console.log('response', response);
  // const sources = [{name: 'source1'}];
  const sources = response?._embedded?.sources || [];
  res.render('sources', {sources});
});

router.post('/add', async (req, res) => {
  
  const data = req.body;
  console.log('data', data);
  const amoApiClient = new AmoApiClient(domain, accessToken, {debug: true});
  const source = {
    name: data.name,
    external_id: data.external_id,
  };

  if (data.default && data.default !== '') source.default = true;
  if (data.origin_code && data.origin_code !== '') source.origin_code = data.origin_code;

  const response = await amoApiClient.addSource([source]);
  
  console.log('response', response);
  res.redirect('/sources');
});


module.exports = router;
