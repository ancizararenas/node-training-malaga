var express = require('express');
var routes = require('../lib/routes.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var mongoURI = process.env.MONGO || 'mongodb://localhost:27017/nodecourse';
var log = require('../middleware/logger').child({
    level: 'info',
    component: '[BIN-SERVER]'
});
var port = process.env.PORT | 3000;

log.info('Preparing to initiate connection do DB');
mongoose.connect(mongoURI);

mongoose.connection.on('error', function(err) {
   log.error('Error connecting to DB: %s', mongoURI, err);
});

mongoose.connection.on('open', function() {
    log.info('Successful connection to DB: %s', mongoURI);
    return initiateServer();
});

function initiateServer() {
    // configure app to use bodyParser() this will let us get the data from a POST & PUT request
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var router = express.Router();
    router.use(function(req, res, next) {
        log.info({req: req}, {message: req.method + ' - request being made to - ' + req.originalUrl});
        next(); //make sure we go to the next routes and don't stop here
    });

    // register routes
    routes.register(router);

    // all of our routes will be prefixed with this context
    app.use('/', router);

    // start the server
    app.listen(port, function () {
        log.info('Our second version of our app is listening on port : ' + port);
    });
}
