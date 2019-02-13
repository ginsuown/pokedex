const fetch = require('node-fetch')
const async = require('async')

let pokemonData;
const base_url = 'https://pokeapi.co/api/v2/'

const getPokemon = (callback) => {
    async.waterfall([
        getAllPokemon,
        getIndividualPokemonData
    ], callback)
}

const getAllPokemon = (callback) => {
    let requestUrl = `${base_url}pokemon/?offset=0&limit=1000`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data.results)
        });
}

const getIndividualPokemonData = (list) => {
    async.map(list, getPokemonData, (err, results) => {
        console.log(`Total results: ${results.length}`)
        pokemonData = results;
    });
}

const getPokemonData = (pokemon, callback) => {
    console.log(`Calling ${pokemon.url} for ${pokemon.name}`)
    fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            callback(null, data)
        })
        .catch((err) => {
            console.log(`Failed to fetch ${pokemon.name}`)
        })
}

module.exports = {
    getPokemon,
    pokemonData
}