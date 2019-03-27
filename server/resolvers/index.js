const path = require('path');
const mergeGraphqlSchemes = require('merge-graphql-schemas')
const fileLoader = mergeGraphqlSchemes.fileLoader
const mergeResolvers = mergeGraphqlSchemes.mergeResolvers

const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));
const merged = mergeResolvers(resolversArray);
module.exports = merged