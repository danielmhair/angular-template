/**
 * Main application file
 */

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var config = require('./config');
require('./server.routes')(app);
// Start server
server.listen(config.port, config.ip, function (err) {
    if (err) {
        console.error(err);
        prcoess.exit(-1);
    }
    console.log('Angular App running on port %d', config.port);
});

// Expose app
module.exports = app;
