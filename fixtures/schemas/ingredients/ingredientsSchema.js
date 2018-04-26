'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// initialize ingredients schema
var IngredientsSchema = new Schema({});

// configure ingredients schema
IngredientsSchema.add({
  _id : false,
  title : {type : String, required: true},
  description : {type : String, required: true}
});

module.exports = IngredientsSchema;