const database = require('./index.js');
const pokemonAPI = require('../server/apis/pokemon');
const pokemonDB = require('./resources/pokemon');
const async = require('async');

let pokemonDataExtraction = (response) => {
    let {
        abilities,
        base_experience,
        forms,
        height,
        id,
        is_default,
        location_area_encounters,
        moves,
        name,
        order,
        species,
        sprites,
        types,
        weight
    } = response;

    return {
        abilities,
        base_experience,
        forms,
        height,
        id,
        is_default,
        location_area_encounters,
        moves,
        name,
        order,
        species,
        sprites,
        types,
        weight
    };
}

let seedMongo = (err, result) => {
    if(err) {
        console.error(err)
    } else {
        result.forEach((pokemon) => {
            let data = pokemonDataExtraction(pokemon);
            pokemonDB.createPokemon(data, (err, results) => {
                if(err) {
                    console.error(err)
                } else {
                    console.log(results)
                }
            });
        });
        return;
    }
}

async.waterfall([
    pokemonAPI.getAllPokemon,
    pokemonAPI.getIndividualPokemonData
], seedMongo);

