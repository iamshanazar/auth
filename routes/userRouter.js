const express = require('express');
const router = express.Router();

const { sign_up } = require('../controllers/userController');

router.route('/signup').post(sign_up);

module.exports = router;
