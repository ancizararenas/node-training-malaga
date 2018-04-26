'use strict';

var resources = require('../resources');
var respond = require('../middleware/respond');
var appInfo = require('../package.json');
var log = require('../middleware/logger').child({
    level: 'info',
    component: '[LIB-ROUTES]'
});

/**
 * function to register the REST API routes
 * @param router - express.Router object
 */
function registerRoutes(router) {
    log.info('registering routes');

    // test endpoint to verify router working
    router.get('/', function(request, response) {
        log.info({ req: request }, { message: 'GET request to /product received' });
        response.status(200).send({
            message: appInfo.name + ' ' + appInfo.description + ' v' + appInfo.version
        });
    });

    //
    // PRODUCT API ROUTES v1
    //

    // get all products
    router.get('/product',
        resources.product.get,
        respond);

    // get product by id
    router.get('/product/:id',
        resources.product.get,
        respond);

    // create product
    router.post('/product',
        resources.product.create,
        respond);

    // update product
    router.put('/product/:id',
        resources.product.update,
        respond);

    // delete product
    router.delete('/product:id',
        resources.product.delete,
        respond);
}

module.exports = {
    register: registerRoutes
};