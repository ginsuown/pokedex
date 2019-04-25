const base = 'https://pokeapi.co/api/v2';

const paths = {
    pokemon: '/pokemon/?offset=0&limit=1500',
    species: '/pokemon-species/?offset=0&limit=1000',
    evolutions: '/evolution-chain/?offset=0&limit=964'
}

module.exports = {
    base,
    paths
}