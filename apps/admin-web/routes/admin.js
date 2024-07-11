const express = require('express');
const config = require('config');
const {AmoService, AmoApiClient} = require('@mobilon-dev/amotop');
const fs = require('node:fs');

const adminRouter = express.Router();

const getAuthDataFromFile = () => {
  let data;
  try {
    const filedata = fs.readFileSync(config.storeFile);
    data = JSON.parse(filedata);
  } catch (err) {
    console.log('no file data');
    data = {
      accessToken: 'not set',
      refreshToken: 'not set',
      domain: 'not set',
    };
  }
  return data;
}

adminRouter.get('/', async (req, res) => {
  const auth = getAuthDataFromFile();
  console.log('get /info', 'auth', auth);

  const urlRedirect = config.apps.server.baseUrl + '/auth';
  res.render('index', {auth, urlRedirect});
});

adminRouter.get('/refresh', async (req, res) => {
  try {
    const auth = getAuthDataFromFile();

    const amoService = new AmoService({debug: true});

    const options = {
      client_id: config.amoApp.clientId,
      client_secret: config.amoApp.clientSecret,
      refresh_token: auth.refreshToken,
      redirect_uri: config.apps.server.baseUrl + '/auth',
    };
    console.log('options', options);
    const response = await amoService.exchangeAccessToken(auth.domain, options);

    const data = {
      domain: auth.domain,
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
    };
    console.log('data', data);
    fs.writeFileSync(config.storeFile, JSON.stringify(data, null, 2), { flag: 'w' });
  } catch (err) {
    console.log('err', err);
  }

  res.redirect('/admin/');
});

adminRouter.get('/leads', async (req, res) => {
  const auth = getAuthDataFromFile();

  const amoApiClinet = new AmoApiClient(auth.domain, auth.accessToken, {debug: true});
  const data = await amoApiClinet.getLeads();
  // console.log('leads', JSON.stringify(data, null, 2));
  res.render('leads', {leads: data._embedded.leads});
});

adminRouter.get('/contacts', async (req, res) => {
  const auth = getAuthDataFromFile();

  const amoApiClinet = new AmoApiClient(auth.domain, auth.accessToken, {debug: true});
  const data = await amoApiClinet.getContacts();
  // console.log('contacts', JSON.stringify(data, null, 2));
  res.render('contacts', {contacts: data._embedded.contacts});
});

module.exports = {
  adminRouter,
};
