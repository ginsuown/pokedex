global.__basedir = __dirname

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 
const morgan = require('morgan')
const db = require('../db');
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql');
const typeDefs = require('./schemas/index')
const rootValue = require('./resolvers/index') 
const cors = require('cors')

const schema = buildSchema(typeDefs)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client/dist')) 
app.use(cors())

/**
 * This is for the middleware to log whatever graphQL is calling.
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

app.listen(port, () => {
  console.log(`app is running on ${port}`)
})


