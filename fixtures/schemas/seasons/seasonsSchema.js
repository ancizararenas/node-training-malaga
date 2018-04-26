'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// initialize seasons schema
var SeasonsSchema = new Schema({});

// configure seasons schema
SeasonsSchema.add({
  title : {type : String, required: true},
  description : {type : String, required: true},
  seasonCode : {type : String, required: true, uppercase : true, unique : true}
});

module.exports = SeasonsSchema;