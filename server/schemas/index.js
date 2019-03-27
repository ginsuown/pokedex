const path = require('path')
const mergeGraphqlSchemes = require('merge-graphql-schemas')
const fileLoader = mergeGraphqlSchemes.fileLoader
const mergeTypes = mergeGraphqlSchemes.mergeTypes

const typesArray = fileLoader(path.join(__dirname, '*.graphql'))

const merged = mergeTypes(typesArray, { all: true })

module.exports = merged