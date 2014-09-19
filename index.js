var Heartbeat = require('./heartbeat_driver');
var AutoScout = require('zetta-auto-scout');

module.exports = new AutoScout('heartbeat', Heartbeat);
