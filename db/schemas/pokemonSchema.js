let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PokemonSchema = new Schema({
    abilities: [{
        ability: {
            name: String,
            url: String
        },
        isHidden: Boolean
    }],
    base_experience: Number,
    forms: [{
        name: String,
        url: String
    }],
    height: Number,
    id: Number,
    is_default: Boolean,
    location_area_encounters: String,
    moves: [{
        name: String,
        url: String
    }],
    name: String,
    order: Number,
    species: [{
        name: String,
        url: String
    }],
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
    types: [{
        slot: Number,
        type: {
            name: String,
            url: String
        }
    }],
    weight: Number
});

module.exports = PokemonSchema;