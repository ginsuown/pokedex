global.__basedir = __dirname

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 
const morgan = require('morgan')
const graphqlHTTP = require('express-graphql');
const healthCheckSchema = require('./schemas/healthCheck')
const healthCheckResolver = require('./resolvers/healthCheck/healthCheck')
const pokemonAPI = require('./apis/pokemon')

pokemonAPI.getPokemon()

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

app.get('/healthCheck', (req, res) => {
  res.status(200).send('health check OK')
})

app.get('/pokemon/all', )


app.use('/graphql', graphqlHTTP({
  schema: healthCheckSchema,
  rootValue: healthCheckResolver,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});

