var { buildSchema } = require('graphql')

var ability = buildSchema(`
    type Ability {
        ability: {
            name: String
            url: String
        }
    }
`)