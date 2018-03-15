var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('../lib/routes.js');
var log = require('../middleware/logger').child({
  level: 'info',
  component : '[BIN-SERVER]'
});
var app = express();
var router = express.Router();

log.info('preparing to initiate connection to DB');
goURI = process.env.MONGO || 'mongodb://localhost:27017/nodecourse';
mongoose.connect(goURI);
mongoose.connection.on('error', function(err){
  log.error('error conecting to DB %s', goURI, err)
});

mongoose.connection.on('open', function(){
  log.info('connected to mongo %s', goURI)
  return initiateServer();
});

var port = process.env.PORT || 3000;

function initiateServer(){
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());

  var router = express.Router();
  router.use(function(req, res, next){
    log.info({req : req}, {message : req.method + ' - request being made to - ' + req.originalUrl});
    next();
  });

// register routes
routes.register(router);

// all of our routes will be prefixed with this context
app.use('/', router);

// start the server
app.listen(port, function () {
  log.info('server started and listening on port : %s', port);
})
}
