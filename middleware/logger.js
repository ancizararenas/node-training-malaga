var bunyan = require('bunyan');
var appInfo = require('../package.json');

var logger = bunyan.createLogger({
    name: appInfo.name,
    serializers: {
        req: bunyan.stdSerializers.req, // standard bunyan request serializer
        err: bunyan.stdSerializers.err // standard bunyan error serializer
    },
    streams: [
        {
            level: 'info', // loggin level desiered
            stream: process.stdout // log INFO and above to stdout
        }
    ]
});

module.exports = logger;

