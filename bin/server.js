var express = require("express");
var app = express();
var router = express.Router();
var routes = require('../lib/routes.js');
var mongoose = require("mongoose")
var mongoURI = process.env.MONGO || 'mongodb://localhost:27017/nodecourse'
var bodyParser = require('body-parser')
var log = require('../middleware/logger').child({
    level: 'info',
    component: '[BIN-SERVER]'
});

var port = process.env.PORT || 3000;

log.info("Connecting to BBDD");
mongoose.connect(mongoURI);

mongoose.connection.on('error', function (err) {
    log.error('error connecting to DB: %s', mongoURI);
});

mongoose.connection.on('open', function (err) {
    log.info('Error connecting to database: %s', mongoURI, err);
    return initiateServer();
});

function initiateServer() {

    // register routes
    routes.register(router);

    router.use(function (req, res, next) {
        log.info({
            req: req,
            message: req.method + ' - request being made to - ' + req.originalUrl
        });
        next(); // make sure we go to the next routes and don't stop here
    });

    // all of our routes will be prefixed with this context
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/', router);

    // Start the server
    app.listen(port, function () {
        log.info('server started and listening on port : %s', port);
    });

}


