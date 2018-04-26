'use strict';

// require/inject sub schemas
var IngredientsSchema = require('../ingredients/ingredientsSchema');
// require other dependencies
var mongoose          = require('mongoose');
var Schema            = mongoose.Schema;

// initialize contents schema
var ContentsSchema = new Schema({});

// configure contents schema
ContentsSchema.add({
  _id : false,
  title : {type : String, required: true},
  description : {type : String, required: true},
  units : {type : Number, required: true, default : 1},
  ingredients : [IngredientsSchema]
});

module.exports = ContentsSchema;