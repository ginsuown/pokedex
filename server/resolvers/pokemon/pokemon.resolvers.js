const pokemonDB = require('../../../db/resources/pokemon');

let pokemon = {
    pokemon: async ({id, type, name}) => {
        return await pokemonDB.searchPokemon(id, type, name);
    }
}


module.exports = pokemon