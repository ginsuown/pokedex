const database = require('../index.js');
const pokemonDB = require('../resources/pokemon.js');
const async = require('async');
const pokemonMapper = require('../../server/mappers/pokemonMapper.js');

let seedPokemonMongo = (err, result) => {
    if(err) {
        console.error(err)
    } else {
        result.forEach((pokemon) => {
            let data = pokemonMapper(pokemon);
            pokemonDB.createPokemon(data, (err, results) => {
                if(err) {
                    console.error(err)
                } else {
                    console.log(results)
                }
            });
        });
        console.log('finished');
    }
}


module.exports = seedPokemonMongo;