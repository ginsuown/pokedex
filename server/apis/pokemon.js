const fetch = require('node-fetch');
const async = require('async');
const { base, paths } = require('./urls');

const getAllPokemon = (callback) => {
    let { pokemon } = paths;
    let requestUrl = `${base}${pokemon}`
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
            console.log(`Error: ${err}`);
            callback(err, null);
        } else {
            console.log(`Total results: ${results.length}`)
            callback(null, results);
        }
    });
}

const getPokemonData = (pokemon, callback) => {
    const { url, name } = pokemon;
    console.log(`Calling ${pokemon.url} for ${pokemon.name}`)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Got back order number ${data.order}`)
            callback(null, data)
        })
        .catch((err) => {
            console.log(`Failed to fetch ${pokemon.name}`)
            console.log(err)
            callback(null, null)
        });
}

module.exports = {
    getAllPokemon,
    getIndividualPokemonData
}
