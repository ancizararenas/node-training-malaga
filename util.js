const util = require('util');
const os = require('os');

const template = 'Hi %s, you have started the machine "%s" %d minutes ago.';
const message = util.format(template, os.userInfo().username, os.hostname(), Math.trunc(os.uptime()/60));

console.log(message);
