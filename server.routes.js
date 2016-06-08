/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./config');

module.exports = function(app) {
  var env = app.get('env');

  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(favicon(path.join(config.root, 'app', 'assets', 'favicon.ico')));
  app.set('appPath', path.join(config.root, 'app'));
  app.use(morgan('dev'));
  app.use(express.static(path.join(config.root, 'app')));

  app.route('/*')
  .get(function(req, res) {
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    app.use(errorHandler()); // Error handler - has to be last
  }
};