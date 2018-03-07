const express = require('express');
const app = express();
const router = express.Router();
const routes = require('../lib/routes.js');
const PORT = process.env.PORT || 3000;

const startServer = () => {
    routes.register(router);
    
    app.use('/', router);
    
    //Start the server
    app.listen(PORT, () => {
        console.log(`Our first app is listening on port: ${PORT}. Enjoy!`);
    });
};

module.exports = {
    startServer: startServer
};
