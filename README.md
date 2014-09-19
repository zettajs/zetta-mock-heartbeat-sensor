#Mock Heartbeat Sensor

This is a mock heartbeat sensor for use in the Zetta platform.

##Installation

`npm install zetta-mock-heartbeat-sensor`

##Usage

To use simply call the `use()` function in your zetta code to use this device.

```javascript
var zetta = require('zetta');
var Heartbeat = require('zetta-mock-heartbeat-sensor');

zetta()
  .use(Heartbeat)
  .listen(1337);
```
