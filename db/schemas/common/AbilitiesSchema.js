let mongoose = require('mongoose');

let AbilitiesSchema = mongoose.Schema({
    name: String,
    url: String,
    is_hidden: Boolean
});

module.exports = AbilitiesSchema;