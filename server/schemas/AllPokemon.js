var { buildSchema } = require('graphql')

var AllPokemon = buildSchema(`
    type AllPokemon: {
        pokemon: [Pokemon]!
    }
`)