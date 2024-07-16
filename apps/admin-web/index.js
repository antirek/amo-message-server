	
const express = require('express');
const config = require('config');
const path = require('path');
const favicon = require('serve-favicon');

const routes = require('./routes');

const app = express();
app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use('/static', express['static'](path.join(__dirname, '../../node_modules')));
app.use('/public', express['static'](path.join(__dirname, '/public')));

app.use(express.json({limit: '2MB'}));
app.use(express.urlencoded({limit: '2MB', extended: true}));

app.use(routes);

app.listen(config.get('apps.admin-web.port'), () => {
  console.log('started with config', config);
});
