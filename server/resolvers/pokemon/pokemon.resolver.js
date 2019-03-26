const pokemonDB = require('../../../db/resources/pokemon');

let Query = {
    all: () => {
        return pokemonDB.getAllPokemon();
    }
}

export default {
    Query
}