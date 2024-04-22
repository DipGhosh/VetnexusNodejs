
var express = require('express');
var userRouter = express.Router();

/* GET users listing. */
userRouter.post('/signup', function (req, res, next) {
  res.json({ message: 'Response Here', data: req.body });
});
module.exports = userRouter;
