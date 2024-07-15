const express = require('express');

const router = express.Router();

router.post('/:scopeId', (req, res) => {
  const scopeId = req.params.scopeId;
  console.log('scopeId', scopeId);
  res.send('OK');
});

module.exports = router;
