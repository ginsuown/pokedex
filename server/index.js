const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 
const morgan = require('morgan')

// const graphqlHTTP = require('express-graphql');
// const { buildSchema } = require('graphql');
// const redis = require('redis');

// const client = redis.createClient();

// // Connect redis client
// client.on('connect', function() {
//     console.log('Redis client connected');
// });
// client.on('error', function (err) {
//     console.log('Something went wrong ' + err);
// });

// Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };


// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client/dist')) 

morgan.token('graphql-query', (req) => {
  const {query, variables, operationName} = req.body;
  return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(variables)}`;
});
app.use(morgan(':method :url :status :res[content-length] :graphql-query - :response-time ms'))

app.get('/healthCheck', (req, res) => {
  res.status(200).send('health check OK')
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});

