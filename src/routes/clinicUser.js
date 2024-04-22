
var express = require('express');
const { signup, login, userDetails } = require('../controllers/clinicUserController');
const { clinicUserProtect } = require('../middlewares/protect');
const { validateBody } = require('../middlewares/validateBody');
const ClinicUser = require('../models/clinicUserModel');
var clinicUserRouter = express.Router();

/* GET home page. */

clinicUserRouter.post('/signup', validateBody(ClinicUser), signup);
clinicUserRouter.post('/login', login);
clinicUserRouter.get('/me', clinicUserProtect, userDetails);

module.exports = clinicUserRouter;
