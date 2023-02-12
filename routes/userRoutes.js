const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
    .post('/signup', userController.userSignUp);
router
    .post('/signin', userController.userSignIn);

module.exports = router;