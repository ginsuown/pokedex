let mongoose = require('mongoose')

let MovesSchema = mongoose.Schema({
    name: String,
    url: String
});

module.exports = MovesSchema;