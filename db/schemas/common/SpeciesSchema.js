let mongoose = require('mongoose')

let SpeciesSchema = mongoose.Schema({
    name: String,
    url: String
});

module.exports = SpeciesSchema;