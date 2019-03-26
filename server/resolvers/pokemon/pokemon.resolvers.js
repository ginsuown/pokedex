const pokemonDB = require('../../../db/resources/pokemon');

let pokemon = {
    all: async () => {
        return await pokemonDB.getAllPokemon();
    }
}


module.exports = pokemon