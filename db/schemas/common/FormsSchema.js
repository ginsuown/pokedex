let mongoose = require('mongoose');

let FormsSchema = mongoose.Schema({
    name: String,
    url: String
});

module.exports = FormsSchema;