'use strict';

var Schemas = require('../resources/product/schema');
var log = require('../middleware/logger').child({
    level: 'info',
    component: '[UTILITIES-PRODUCT-HELPER]'
});

// instantiate helper object
var Helper = {};

Helper.instantiateProduct = function(body) {
    debugger
    log.info({ body: body }, { message: 'instantiating product using helper method' });

    // create new product object of type ProductSchema
    var product = new Schemas.productsSchema();

    // set empty arrays
    product.contents = [];
    product.categories = [];
    product.seasons = [];

    return product;
};

Helper.setSeason = function(body, product) {
    debugger
    log.info({ body: body }, { message: 'about to setSeason using helper method' });

    // create new season object of type SeasonSchemaInner
    var season = new Schemas.seasonsInnerSchema();

    // instantiate season values
    season.seasonCode = Helper.setPropertyValues(body, 'season', 'seasonCode', null);
    product.seasons.push(season);
};

Helper.setCategory = function(body, product) {
    debugger
    log.info({ body: body }, { message: 'about to setCategory using helper method' });

    // create new season object of type CategoriesInnerSchema
    var category = new Schemas.categoriesInnerSchema();

    // instantiate category values  
    debugger
    category.categoryCode = Helper.setPropertyValues(body, 'categories', 'categoryCode', 'NA');
    product.categories.push(category);
};

Helper.setContent = function(body, product) {
    debugger
    log.info({ body: body }, { message: 'about to setContent using helper method' });

    // create new season object of type ContentsInnerSchema
    var content = new Schemas.contentsInnerSchema();

    // instantiate content values  
    content.contentCode = Helper.setPropertyValues(body, 'contents', 'contentCode', 'NA');
    content.units = Helper.setPropertyValues(body, 'contents', 'units', null);

    product.contents.push(content);
};

Helper.setPrice = function(body, product) {
    debugger
    log.info({ body: body }, { message: 'about to setPrice using helper method' });

    var netValue = +Helper.setPropertyValues(body, 'price', 'netValue', 0);
    var vat = +Helper.setPropertyValues(body, 'price', 'vat', 0);
    product.price = {
        netValue: netValue,
        vat: vat,
        grossValue: netValue + vat,
        currencyCode: +Helper.setPropertyValues(body, 'price', 'currencyCode', 'GBP')
    };
};

Helper.setDefaultProductValues = function(body, product) {
    debugger
    log.info({ body: body }, { message: 'about to setDefaultProductValues using helper method' });

    product.title = Helper.setPropertyValues(body, 'title', null, null);
    product.description = Helper.setPropertyValues(body, 'description', null, null);

    // set meta data
    product.meta = {
        created: Date.now(),
        lastModified: Date.now(),
        visible: Helper.setPropertyValues(body, 'visible', null, true)
    };

    // set product id
    product.productId = product.categories[0].categoryCode.toUpperCase() + '-' + Math.floor(Math.random() * (1000 - 1)) + 1;
};


Helper.productValuesExist = function(body, searchKeyOne, searchKeyTwo) {
    if ((searchKeyOne) && (searchKeyTwo)) {
        return ((searchKeyOne in body) && (searchKeyTwo in body[searchKeyOne]));
    } else {
        return (searchKeyOne in body);
    }
};

Helper.getProductValues = function(body, searchKeyOne, searchKeyTwo) {
    debugger
    if ((searchKeyOne) && (searchKeyTwo)) {
        return body[searchKeyOne][searchKeyTwo];
    } else {
        return body[searchKeyOne];
    }
};

Helper.setPropertyValues = function(body, searchKeyOne, searchKeyTwo, noValueDescription) {
    var text = 'No ' + searchKeyOne + ' ' + ((searchKeyTwo) ? searchKeyTwo : '') + ' available';
    var noValue = (noValueDescription) ? noValueDescription : text;

    return Helper.productValuesExist(body, searchKeyOne, searchKeyTwo) ? Helper.getProductValues(body, searchKeyOne, searchKeyTwo) :
        noValue;
};

module.exports = Helper;