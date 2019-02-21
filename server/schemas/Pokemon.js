var { buildSchema } = require('graphql');

var pokemon = buildSchema(`
  type Pokemon {
    abilities: [Ability]!
    forms: [Form]!
    height: Int!
    id: Int!
    location_area_counters: String!
    moves: [Move]
    name: String!
    order: Int!
    species: Species!
    sprites: [Sprite]!
    stats: [Stat]!
    types: [Type]!
    weight: Int!
  }
`);

module.exports = pokemon