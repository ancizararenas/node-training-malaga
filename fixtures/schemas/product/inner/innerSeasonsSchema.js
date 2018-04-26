'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// initialize seasons schema
var InnerSeasonsSchema = new Schema({});

// configure seasons schema
InnerSeasonsSchema.add({
  _id : false,
  seasonCode : {type : String, required: true, uppercase : true, unique : true}
});

module.exports = InnerSeasonsSchema;