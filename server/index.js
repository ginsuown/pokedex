global.__basedir = __dirname

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 
const morgan = require('morgan')
const pokemonAPI = require('./apis/pokemon')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql');
const typeDefs = require('./schemas/index')
const rootValue = require('./resolvers/index') 

const schema = buildSchema(typeDefs)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client/dist')) 
/**
 * This is for the express person of capturing the graphql query when we make an API call through a specific route
 */
morgan.token('graphql-query', (req) => {
  const {query, variables, operationName} = req.body;
  return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(variables)}`;
});

app.use(morgan(':method :url :status :res[content-length] :graphql-query - :response-time ms'))
app.use('/pokemon', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))



