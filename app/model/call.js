'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
const CallsSchema = new Schema({
  phoneNumber: String,
  message: String,
  date: Date
});

module.exports = mongoose.model('Call', CallsSchema)
