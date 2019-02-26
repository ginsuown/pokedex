global.__basedir = __dirname

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 
const morgan = require('morgan')
const pokemonAPI = require('./apis/pokemon')
const { buildSchema } = require('graphql')
const typeDefs = require('./schemas/index')
const rootValue = require('./resolvers/index') 

const schema = buildSchema(typeDefs)

let pokemonData = []
const initPokemonData = new Promise((resolve, reject) => {
  pokemonAPI.getPokemon((err, result) => {
    if(err) {
      reject(err)
    } else {
      pokemonData = result
      initExpressServer();
      resolve(app)
    }
  });
})

const initExpressServer = () => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(express.static('client/dist')) 
  /**
   * This is for the express person of capturing the graphql query when we make an API call through a specific route
   */
  // morgan.token('graphql-query', (req) => {
  //   const {query, variables, operationName} = req.body;
  //   return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(variables)}`;
  // });

  // app.use(morgan(':method :url :status :res[content-length] :graphql-query - :response-time ms'))

  app.get('/healthCheck', (req, res) => {
    res.status(200).send('health check OK')
  })

  app.use('/pokemon', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  }))
}

initPokemonData
  .then((app) => {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`)
      console.log(`${pokemonData[0].name} says hi`)
    });
  })
  .catch((err) => {
    console.log(`Server could not start up`)
  })



