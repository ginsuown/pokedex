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

const getAllPokemon = () => {
  return new Promise((resolve, reject) => {
    PokemonModel.find({}, (err, results) => {
      console.log(results)
      if(err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
};

const searchPokemonByName = (name, callback) => {
  PokemonModel.find({name}, (err, pokemon) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, pokemon);
    }
  });
}




const searchPokemonByType = (type, callback) => {
  PokemonModel.find({type}, (err, pokemon) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, pokemon);
    }
  });
}

const searchPokemonById = (id, callback) => {
  PokemonModel.find({ id }, (err, pokemon) => {
    if(err) {
      callback(err, null)
    } else {
      callback(null, pokemon)
    }
  })
}

module.exports.createPokemon = createPokemon;
module.exports.getAllPokemon = getAllPokemon;
module.exports.searchPokemonByName = searchPokemonByName;
module.exports.searchPokemonByType = searchPokemonByType;
module.exports.searchPokemonById = searchPokemonById;