var express = require('express');
var routes = require('../lib/routes.js');
var app = express();
var router = express.Router();

var port = process.env.PORT || 3000;

// register routes
routes.register(router);

// all of our routes will be prefixed with this context
app.use('/', router);

// start the server
app.listen(port, function () {
  console.log('Our second version of our app is listening on port : ' + port);
})
