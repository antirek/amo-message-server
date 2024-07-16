const express = require('express');

const sourcesRouter = require('./sources');
const accountRouter = require('./account');
const usersRouter = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('index');
  res.render('index');
});

router.use('/sources', sourcesRouter);
router.use('/account', accountRouter);
router.use('/users', usersRouter);

module.exports = router;
