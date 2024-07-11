const express = require('express');
const config = require('config');
const {AmoService} = require('@mobilon-dev/amotop');
const fs = require('node:fs');

const authRouter = express.Router();

authRouter.get('/disconnect', async (req, res) => {
  console.log('get /auth/disconnect', req.query);
  res.send('OK');
})

authRouter.get('/', async (req, res) => {
  console.log('get /auth', req.query);
  const code = req.query.code;
  const domain = req.query.referer;
  const clientId = req.query.client_id;

  console.log({code, domain, clientId});

  const amoService = new AmoService({debug: true});
  const options = {
    client_id: clientId,
    client_secret: config.amoApp.clientSecret,
    code: code,
    redirect_uri: config.apps.server.baseUrl + '/auth',
  };

  const response = await amoService.exchangeCode(domain, options);
  const accessToken = response.access_token;
  const refreshToken = response.refresh_token;
  console.log({domain, accessToken, refreshToken});

  const data = {
    domain,
    accessToken,
    refreshToken,
  };
  
  fs.writeFileSync(config.storeFile, JSON.stringify(data, null, 2), { flag: 'w' });
  res.send('OK');
});


module.exports = {
  authRouter,
};
