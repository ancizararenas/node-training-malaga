const app = express();
const log = require('../middleware/logger').child({
    level: 'info',
    component: '[BIN-SERVER]'
});
const express = require('express');
const router = express.Router();
const routes = require('../lib/routes.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO || 'mongodb://localhost:27017/nodecourse';

const initDBConnection = () => {
    log.info('Preparing to initiate our DB connection...');
    mongoose.connect(MONGO_URI);

    mongoose.connection.on('error', (err) => {
        log.error('Error connecting to database: %s' , MONGO_URI, err);
    })

    mongoose.connection.on('open', () => {
        log.info('Mongoose DB: %s connection ready!', MONGO_URI);
        startServer();
    });
}

const startServer = () => {
    routes.register(router);

    router.use((req, res, next) => {
        log.info({req: req}, {message: `${req.method} - request being made to - ${req.originalUrl}`});
        next(); //Make sure we go to the next routes and don't stop here
    });

    // Configure app to use body-parser(). This will let us to get the data from POST & PUT requests
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/', router);

    //Start the server
    app.listen(PORT, () => {
        log.info(`Our first app is listening on port: ${PORT}. Enjoy!`);
    });
}

initDBConnection();