const express = require('express');

const sourcesRouter = require('./sources');
const accountRouter = require('./account');
const usersRouter = require('./users');
const conversationsRouter = require('./conversations');
const contactsRouter = require('./contacts');
const chatsRouter = require('./chats');
const messagesRouter = require('./messages');
const talksRouter = require('./talks');
const eventsRouter = require('./events');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('index');
  res.render('index');
});

router.use('/users', usersRouter);
router.use('/sources', sourcesRouter);
router.use('/account', accountRouter);
router.use('/conversations', conversationsRouter);
router.use('/contacts', contactsRouter);
router.use('/chats', chatsRouter);
router.use('/messages', messagesRouter);
router.use('/talks', talksRouter);
router.use('/events', eventsRouter);

module.exports = router;
