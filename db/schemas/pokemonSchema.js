let mongoose = require('mongoose');
let AbilitiesSchema = require('./common/AbilitiesSchema');
let FormsSchema = require('./common/FormsSchema')
let MovesSchema = require('./common/MovesSchema');
let SpeciesSchema = require('./common/SpeciesSchema');
let TypesSchema = require('./common/TypesSchema');

let PokemonSchema = mongoose.Schema({
    abilities: [ AbilitiesSchema ],
    base_experience: Number,
    forms: [ FormsSchema ],
    height: Number,
    id: Number,
    is_default: Boolean,
    location_area_encounters: String,
    moves: [ MovesSchema ],
    name: String,
    order: Number,
    species: [ SpeciesSchema ],
    sprites: {
        back_default: String,
        back_female: String,
        back_shiny: String,
        back_shiny_female: String,
        front_default: String,
        front_female: String,
        front_shiny: String,
        front_shiny_female: String,
    },
    types: [ TypesSchema ],
    weight: Number
});

module.exports = PokemonSchema;