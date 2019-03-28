const PokemonSchema = require('../schemas/pokemonSchema')
const mongoose = require('mongoose');

const PokemonModel = mongoose.model('Pokemon', PokemonSchema, 'Pokemon');

const createPokemon = (pokemon, callback) => {
  const newPokemon = new PokemonModel(pokemon);
  newPokemon.save((err, results) => {
    console.log(results.length)
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const searchPokemon = (id, type, name) => {
  return new Promise((resolve, reject) => {
    let query = {}

    if(id) {
      query.id = id;
    }

    // { types: { $elemMatch: { name: "water" } } }
    if(type) {
      let typeQuery = { types: { $elemMatch: { name: type } } }
    }
    
    if(name) {
      query.name = name
    }
    console.log(`Query: ${JSON.stringify(query)}`)
    PokemonModel.find(query, (err, results) => {
      console.log(results)
      if(err) {
        reject(err)
      } else {
        resolve(results)
      }
    });
  });
}

module.exports.createPokemon = createPokemon;
module.exports.searchPokemon = searchPokemon;