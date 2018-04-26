'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// initialize categories schema
var InnerContentsSchema = new Schema({});

// configure categories schema
InnerContentsSchema.add({
    _id: false,
    contentCode: { type: String, required: true, uppercase: true, unique: true },
    units: { type: Number, required: true, default: 1 }
});

module.exports = InnerContentsSchema;