
var express = require('express');
const { signup, login, userDetails } = require('../controllers/clinicUserController');
const { clinicUserProtect } = require('../middlewares/protect');
var clinicUserRouter = express.Router();

/* GET home page. */

clinicUserRouter.post('/signup', signup);
clinicUserRouter.post('/login', login);
clinicUserRouter.get('/me', clinicUserProtect, userDetails);

module.exports = clinicUserRouter;
