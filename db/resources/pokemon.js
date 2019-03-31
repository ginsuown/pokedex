const PokemonSchema = require('../schemas/pokemonSchema')
const mongoose = require('mongoose');

const PokemonModel = mongoose.model('Pokemon', PokemonSchema, 'Pokemon');

const createPokemon = (pokemon, callback) => {
  const newPokemon = new PokemonModel(pokemon);
  newPokemon.save((err, results) => {
    console.log(results.length);
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const searchPokemon = (id, type, name, specie, move, form) => {
  return new Promise((resolve, reject) => {
    let query = {};

    if(id) {
      query.id = id;
    }

    if(type) {
      query.types = { $elemMatch: { name: type } };
    }

    if(form) {
      query.forms = { $elemMatch: { name: form }};
    }

    if(name) {
      query.name = name;
    }

    if(specie) {
      query = { "species.name": specie };
    }

    if(move) {
      query.moves = { $elemMatch: { name: move } };
    }

    console.log(`Query: ${JSON.stringify(query)}`);
    PokemonModel.find(query, (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports.createPokemon = createPokemon;
module.exports.searchPokemon = searchPokemon;