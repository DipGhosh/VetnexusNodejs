
var express = require('express');
const { signup, login } = require('../controllers/clinicUserController');
var clinicUserRouter = express.Router();

/* GET home page. */
clinicUserRouter.post('/signup', signup);
clinicUserRouter.post('/login', login);

module.exports = clinicUserRouter;
