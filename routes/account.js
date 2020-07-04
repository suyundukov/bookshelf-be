const express = require('express');

const controller = require('../controllers/account');

const router = express.Router();

router.post('/account/signup', controller.create);

module.exports = router;
