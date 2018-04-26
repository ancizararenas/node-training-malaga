'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// initialize categories schema
var CategoriesSchema = new Schema({});

// configure categories schema
CategoriesSchema.add({
  _id : false,
  title : {type : String, required: true},
  description : {type : String, required: true},
  categoryCode : {type : String, required: true, uppercase : true}
});

module.exports = CategoriesSchema;