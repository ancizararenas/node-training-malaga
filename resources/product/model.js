'use strict';
var Schemas = require('./schema');
var Model = require('./schema').productsSchema;
var ObjectId = require('mongoose').Types.ObjectId;
var Helper = require('../../utilities/productHelper');
var async = require('async');
var log = require('../../middleware/logger').child({
    level: 'info',
    component: '[RESOURCES-PRODUCT-MODEL]'
});

var Product = function() {};

/**
 * Model method to retrieve ALL products
 * @param req - req object
 * @param done - callback
 */
Product.prototype.get = function(req, done) {
    log.info({ message: 'about to get ALL products from model' });

    Model.find(function(err, products) {
        var error;
        if (err) {
            error = new Error('Error encountered retrieving products');
            error.statusCode = 500;
            log.error({ message: 'error encountered retrieving products from database' }, { error: err });
            return done(error);
        }

        if (!products || products.length < 1) {
            error = new Error('No products found');
            error.statusCode = 404;
            log.info({ message: 'No products found in database' }, { error: error });
            return done(error);
        } else {
            log.info({ message: 'successfully retrieved products from model' });
            done(null, products);
        }
    });
};


/**
 * Model method to retrieve product with specific id
 * @param id - id of product to search for
 * @param done - callback
 */
Product.prototype.getById = function(id, done) {
    log.info({ productId: id }, { message: 'about to get single product from model' });
    debugger

    Model.findById(new ObjectId(id), function(err, product) {
      debugger
        var error;
        if (err) {
            error = new Error('Error encountered retrieving product with ID ' + id);
            error.statusCode = 500;
            log.error({ message: 'error encountered retrieving product with ID ' + id + 'from database' }, { error: err });
            return done(error);
        }

        if (!product || product.length < 1) {
            error = new Error('No product found with requested ID ' + id);
            error.statusCode = 404;
            log.info({ message: 'No product found with requested ID' + id });
            return done(error);
        } else {
            log.info({ message: 'successfully retrieved products with ID %s from model', id });
            done(null, product);
        }
    });
};

/**
 * Model method to create product
 * @param id - id of product to search for
 * @param done - callback
 */
Product.prototype.create = function(req, body, done) {
    log.info({ product: body }, { message: 'about to create a new product object' });

    // set product values
    debugger
    var product = Helper.instantiateProduct(body);
    debugger
    Helper.setSeason(body, product); // TODO:IMPLEMENT LOOP SET SEASON
    debugger
    Helper.setCategory(body, product); // TODO:IMPLEMENT LOOP SET CATEGORY
    debugger
    Helper.setContent(body, product); // TODO:IMPLEMENT LOOP SET CONTENT
    debugger
    Helper.setPrice(body, product);
    debugger
    Helper.setDefaultProductValues(body, product); // TODO:IMPLEMENT LOOP SET DEFAULT VALUES


    product.save(function(err, storedProduct) {
      debugger
        if (err || storedProduct.body === 'undefined') {
            var error = new Error('Error encounterd storing product');
            error.statusCode = 500;
            log.error({ body: body }, { message: 'error encountered storing product' }, { error: err || error });
            return done(err || error);
        }

        log.info({ product: storedProduct }, { message: 'successfully created product' });

        storedProduct.statusCode = 201;
        return done(null, storedProduct);
    });

};


module.exports = new Product();

// TODO :: KEEP LOOKING AT SOLUTIONS FOR
// https://github.com/Automattic/mongoose/issues/3020
// ISSUE AFFECTING getById METHOD



// original season initilisation
//season.title = (body.season && body.season.title) ? body.season.title : 'No season title available';
//season.description = (body.season && body.season.description) ? body.season.description : 'No season description available';
//season.seasonCode = (body.season && body.season.seasonCode) ? body.season.seasonCode : 'No season code available';

// instantiate category values
//category.title = (body.category && body.category.title) ? body.category.title : 'No category title available';
//category.description = (body.category && body.category.description) ? body.category.description : 'No category description available';
//category.categoryCode = (body.category && body.category.categoryCode) ? body.category.categoryCode : 'NA';

//ingredient.title = (body.ingredient && body.ingredient.title) ? body.ingredient.title : 'No ingredient title available';
//ingredient.description = (body.ingredient && body.ingredient.description) ? body.ingredient.description : 'No ingredient description available';

//content.ingredients = [];
//content.title = (body.content && body.content.title) ? body.content.title : 'No content title available';
//content.description = (body.content && body.content.description) ? body.content.description : 'No content description available';
//content.units = (body.content && body.content.units) ? body.content.units : 'No content units available';
//content.ingredients = ingredient;

// instantiate product values
//product.title = (body.title) ? body.title : 'No title available';
//product.description = (body.description) ? body.description : 'No ' +
//  'description avaialble';
