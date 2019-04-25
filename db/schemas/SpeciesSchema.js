let mongoose = require('mongoose')

let SpeciesSchema = mongoose.Schema({
    name: String,
    url: String
    evolves_from_species: String,
    flavor_text: String,
    genus: String,
    growth_rate: String,
    habitat: String,
    is_baby: String,
    varieties: [
        {
            isDefault: Boolean,
            name: String,
            id: ObjectId
        }
    ]
});

module.exports = SpeciesSchema;