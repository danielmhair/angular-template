/**
 * Main application file
 */

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var config = require('./config');
require('./server.routes')(app);
// Start server
server.listen(config.port, config.ip, function () {
    console.log('Angular App running on port %d', config.port);
});

// Expose app
module.exports = app;
