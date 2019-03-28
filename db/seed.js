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

    let updatedMoves = [];
    moves.forEach((move) => {
        updatedMoves.push(move.move)
    })

    let flattenedAbilities = [];
    abilities.forEach((a) => {
        let abilityObj = {};
        abilityObj.name = a.ability.name;
        abilityObj.url = a.ability.url;
        abilityObj.is_hidden = a.is_hidden;
        flattenedAbilities.push(abilityObj);
    });


    let flattenedTypes = [];
    types.forEach((t) => {
        let typeObj = {};
        typeObj.name = t.type.name;
        typeObj.url = t.type.url;
        flattenedTypes.push(typeObj);
    })

    return {
        abilities: flattenedAbilities,
        base_experience,
        forms,
        height,
        id,
        is_default,
        location_area_encounters,
        moves: updatedMoves,
        name,
        order,
        species,
        sprites,
        types: flattenedTypes,
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

