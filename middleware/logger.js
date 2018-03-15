const bunyan = require('bunyan');
const appInfo = require('../package.json');

const logger = bunyan.createLogger({
    name: (appInfo.name || 'default-logger').toUpperCase(),
    serializers: {
        req: bunyan.stdSerializers.req, //standard buyan req serializer
        err: bunyan.stdSerializers.err // standard buyan err serializer
    },
    streams: [{
        level: 'info', //login level
        stream: process.stdout //log INFO and above stdout
    }]
});

module.exports = logger;