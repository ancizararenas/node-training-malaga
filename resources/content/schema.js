'use strict';
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// object to store all schemas
var Schemas = {};

// instantiate content schema
var ContentsSchema = new Schema({});
var IngredientsSchema = new Schema({});

IngredientsSchema.add({
  _id : false,
  title : {type : String, required: true},
  description : {type : String, required: true},
  ingredientCode : {type : string}
});

ContentsSchema.add({
  title : {type : String, required: true},
  description : {type : String, required: true},
  units : {type : Number, required: true, default : 1},
  ingredients : [IngredientsSchema]
});

// set schemas into Schemas object
Schemas.contentsSchema = mongoose.model('Contents', ContentsSchema);
Schemas.ingredientsSchema = mongoose.model('Ingredients', IngredientsSchema);

module.exports = Schemas;
