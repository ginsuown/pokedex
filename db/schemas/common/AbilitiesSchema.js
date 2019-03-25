let mongoose = require('mongoose');

let AbilitiesSchema = mongoose.Schema({
    ability: {
        name: String,
        url: String
    },
    isHidden: Boolean
});

module.exports = AbilitiesSchema;