const PokemonSchema = require('../schemas/pokemonSchema')
const mongoose = require('mongoose');

const PokemonModel = mongoose.model('Pokemon', PokemonSchema, 'Pokemon');

const createPokemon = (pokemon, callback) => {
  const newPokemon = new PokemonModel(pokemon);
  newPokemon.save((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const getAllPokemon = (callback) => {
  PokemonModel.find({}, (err, pokemon) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, pokemon);
    }
  });
};

const deletePokemon = (id, callback) => {
  PokemonModel.remove({_id: id}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const searchPokemonByName = (name, callback) => {

}

const searchPokemonByType = (type, callback) => {

}

const searchPokemonByMoves = (moves, callback) => {

}

module.exports.createPokemon = createPokemon;
module.exports.getAllPokemon = getAllPokemon;
module.exports.searchPokemonByName = searchPokemonByName;
module.exports.searchPokemonByType = searchPokemonByType;
module.exports.searchPokemonByMoves = searchPokemonByMoves;
module.exports.deletePokemon = deletePokemon;