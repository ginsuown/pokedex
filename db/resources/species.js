const SpeciesSchema = require('../schemas/speciesSchema')
const mongoose = require('mongoose');

const SpeciesModel = mongoose.model('Species', SpeciesSchema, 'Species');

const createSpecies = (species, callback) => {
    const newSpecies = new SpeciesModel(species);
    newSpecies.save((err, results) => {
        console.log(result.length);
        if(err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

const searchSpecies = (id) => {
    return new Promise((resolve, reject) => {
        //search by object id
    })
}

module.exports.createSpecies = createSpecies;
module.exports.searchSpecies = searchSpecies;