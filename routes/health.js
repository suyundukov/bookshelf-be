const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    up_time: process.uptime(),
  });
});

module.exports = router;
