const fetch = require('node-fetch');
const async = require('async');
const { base, paths } = require('./urls');

const getAllSpeciesData = (pokemon, callback) => {
    let requestUrl = 
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data.results);
        })
        .catch((err) => {
            console.log(err);
            callback(err, null);
        });
}

const getIndividualSpeciesData = (list, callback) => {
    async.mapLimit(list, 10, getSpeciesData, (err, results) => {
        if(err) {
            console.log(`Error: ${err}`);
            callback(err, null);
        } else {
            console.log(`Total results: ${results.length}`);
            callback(null, results);
        }
    });
}

const getSpeciesData = (species, callback) => {
    const { url, name } = species;
    console.log(`Calling ${species.url} for ${species.name}`);
    fetch(url)
        .then(repsonse => response.json())
        .then(data => {
            console.log(`Got back species ${name}`);
            callback(null, data);
        })
        .catch((err) => {
            console.log(`Failed to get ${name} `);
            console.log(err);
            callback(null, null);
        })  
}

module.exports = {
    getAllSpeciesData,
    getIndividualSpeciesData
}