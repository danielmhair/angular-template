'use strict';

var path = require('path');

// All configurations will extend these options
// ============================================
var config = {
  env: process.env.NODE_ENV || 'development',
  // Root path of server
  root: path.normalize(__dirname),
  // Server port
  port: process.env.PORT || 3001,
  // Server IP
  ip: process.env.IP || '127.0.0.1'
};

module.exports = config;
