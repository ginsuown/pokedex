const request = require('request')

const base_url = 'https://pokeapi.co/api/v2/'

/**
 * Method calls the pokemon API based on the name
 * Will need to readjust later to include callbacks
 * or modify the query to be more GraphQL heavy
 * @param {*} name of the pokemon
 * @param {*} successCB
 * @param {*} failureCB
 */
const getPokemonByName = (name, successCB, failureCB) => {
    const requestUrl = `${base_url}pokemon/${name}`
    request(requestUrl, (error, response, body) => {
        if(error) {
            failureCB(body)
        } else {
            successCB(body)
        }
    })
}

/**
 * Methods call the pokemon API based on the id
 * Will need to also readjust later to include the correct request, response callbacks
 * or modify the query to be more GraphQL heavy
 * @param {*} id 
 * @param {*} successCB 
 * @param {*} failureCB 
 */
const getPokemonById = (id, successCB, failureCB) => {
    const requestUrl = `${base_url}pokemon/${id}`
    request(requestUrl, (error, response, body) => {
        if(error) {
            failureCB(body)
        } else {
            successCB(body)
        }
    })
}

/**
 * @returns the entire list of Pokemon in this existing database. 
 * Default objects for rendering select lists will include a label and value.
 */
const getAllPokemon = (successCB, failureCB) => {
    const requestUrl = `${base_url}pokemon/?offset=0&limit=1000`
    request(requestUrl, (error, response, body) => {
        if(error) {
            failureCB(body)
        } else {
            successCB(body)
        }
    })
}

modules.exports = {
    getPokemonByName,
    getPokemonById,
    getAllPokemon
}