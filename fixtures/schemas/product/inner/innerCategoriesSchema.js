'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// initialize categories schema
var InnerCategoriesSchema = new Schema({});

// configure categories schema
InnerCategoriesSchema.add({
    _id: false,
    categoryCode: { type: String, required: true, uppercase: true, unique: true }
});

module.exports = InnerCategoriesSchema;