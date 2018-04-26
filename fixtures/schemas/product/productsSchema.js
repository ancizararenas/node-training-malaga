'use strict';

// require/inject sub schemas
var InnerContentsSchema = require('./inner/innerContentsSchema');
var InnerCategoriesSchema = require('./inner/innerCategoriesSchema');
var InnerSeasonsSchema = require('./inner/innerSeasonsSchema');
// require other dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// initialize products schema
var ProductsSchema = new Schema({});

// configure products schema
ProductsSchema.add({
    title: { type: String, required: true },
    productId: { type: String, required: true, unique: true, index: true, uppercase: true },
    description: { type: String, required: true },
    price: {
        grossValue: { type: Number, required: true },
        netValue: { type: Number, required: true },
        vat: { type: Number, required: true, default: 0 },
        currencyCode: { type: String, required: true, default: 'GBP' }
    },
    contents: [InnerContentsSchema],
    categories: [InnerCategoriesSchema],
    season: [InnerSeasonsSchema],
    meta: {
        created: { type: Date, required: true },
        lastModified: { type: Date, default: Date.now },
        visible: { type: Boolean, required: true, default: true }
    }
});

module.exports = ProductsSchema;