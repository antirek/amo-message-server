const express = require('express');
const config = require('config');

const routes = require('./routes');

const app = express();

app.use(express.json({limit: '2MB'}));

app.use(routes);

app.listen(config.get('apps.incoming-messages-api.port'), () => {
  console.log('started with config', config);
});
