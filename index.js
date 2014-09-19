var Heartbeat = require('./hearbeat_driver');
var AutoScout = require('zetta-auto-scout');

module.exports = new AutoScout('heartbeat', Heartbeat);
