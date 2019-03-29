const pokemonDB = require('../../../db/resources/pokemon');

let pokemon = {
    pokemon: async ({id, type, name, specie, move}) => {
        return await pokemonDB.searchPokemon(id, type, name, specie, move);
    }
}


module.exports = pokemon