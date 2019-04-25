let mongoose = require('mongoose');

let TypesSchema = mongoose.Schema({
    name: String,
    url: String
});

module.exports = TypesSchema;