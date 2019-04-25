const argv = require('yargs').argv;
const { getAllPokemon, getIndividualPokemonData } = require('../../server/apis/pokemon');
const pokemonSeed = require('./pokemonSeed');
const { POKEMON, SPECIES } = require('../enums/seedTypes');

let seedType = argv._;
console.log(seedType);

switch(seedType[0]) {
    case SPECIES:
        console.log('species seeding');
        break;       
    case POKEMON:
    default:
        console.log('pokemon seeding');
        // const methods = [getAllPokemon, getIndividualPokemonData];
        // async.waterfall(methods, pokemonSeed);
        break;       
}


