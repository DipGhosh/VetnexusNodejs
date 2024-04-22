
var express = require('express');
const { signup, login, userDetails } = require('../controllers/clinicUserController');
var clinicUserRouter = express.Router();

/* GET home page. */

clinicUserRouter.post('/signup', signup);
clinicUserRouter.post('/login', login);
clinicUserRouter.get('/me', userDetails);

module.exports = clinicUserRouter;
