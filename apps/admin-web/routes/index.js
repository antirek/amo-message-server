const express = require('express');

const sourcesRouters = require('./sources');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('index');
  res.render('index');
});

router.use('/sources', sourcesRouters);

module.exports = router;
