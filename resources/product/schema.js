'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// object to store all schemas
var Schemas = {};

// instantiate content schema
// var ContentsSchema = new Schema({});

// set schemas into Schemas object
Schemas.contentsInnerSchema = mongoose.model('Contents', require('./../../fixtures/schemas/product/inner/innerContentsSchema'));
Schemas.seasonsInnerSchema = mongoose.model('Seasons', require('./../../fixtures/schemas/product/inner/innerSeasonsSchema'));
Schemas.categoriesInnerSchema = mongoose.model('Categories', require('./../../fixtures/schemas/product/inner/innerCategoriesSchema'));
Schemas.productsSchema = mongoose.model('Products', require('./../../fixtures/schemas/product/productsSchema'));

module.exports = Schemas;