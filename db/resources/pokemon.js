const PokemonSchema = require('../schemas/PokemonSchema')
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
    
    if(type) {
      query.types = { $elemMatch: { name: type } };
    } else if(form) {
      query.forms = { $elemMatch: { name: form }};
    } else if(name) {
      query.name = { $text: { $search: name } };
    } else if(specie) {
      query = { "species.name": specie };
    } else if(move) {
      query.moves = { $elemMatch: { name: move } };
    } else {
      query.id = id;
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