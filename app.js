var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv').config();
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

var swaggerOptions = {
  "definition": {
    "openapi": "3.0.1",
    "info": {
      "title": "Vetnexus API Documentation",
      "version": "0.1.0",
      "description": "This is a API Documentation for Vetnexus",
      "license": {
        "name": "MIT",
        "url": "https://spdx.org/licenses/MIT.html"
      },
      "contact": {
        "name": "Vetnexus",
        "url": "https://www.vetnexus.com.au/",
        "email": "info@vetnexus.com"
      }
    },
    "servers": [
      {
        "url": "http://localhost:3000"
      }
    ]
  },
  "apis": ["./routes/*.js"]
};
const specs = swaggerJsdoc(swaggerOptions);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use('/', indexRouter);
app.use('/auth', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
