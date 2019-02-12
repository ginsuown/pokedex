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
    let requestUrl = `${base_url}pokemon/?offset=0&limit=1500`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data.results)
        })
        .catch((err) => {
            console.log(err)
            callback(err, null)
        });
}

const getIndividualPokemonData = (list, callback) => {
    async.mapLimit(list, 10, getPokemonData, (err, results) => {
        if(err) {
            console.log(`Error: ${err}`)
            callback(err, null)
        } else {
            console.log(`Total results: ${results.length}`)
            callback(null, results);
        }
    });
}

const getPokemonData = (pokemon, callback) => {
    // console.log(`Calling ${pokemon.url} for ${pokemon.name}`)
    fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            callback(null, data)
        })
        .catch((err) => {
            console.log(`Failed to fetch ${pokemon.name}`)
            console.log(err)
            callback(null, null)
        })
}

module.exports = {
    getPokemon,
    pokemonData
}
