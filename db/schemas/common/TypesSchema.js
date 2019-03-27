let mongoose = require('mongoose');

let TypesSchema = mongoose.Schema({
    slot: Number,
    type: {
        name: String,
        url: String
    }
});

module.exports = TypesSchema;