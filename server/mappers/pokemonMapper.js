
let pokemonMapper = (response) => {
    let {
        abilities,
        base_experience,
        forms,
        height,
        id,
        is_default,
        location_area_encounters,
        moves,
        name,
        order,
        species,
        sprites,
        types,
        weight
    } = response;

    let updatedMoves = [];
    moves.forEach((move) => {
        updatedMoves.push(move.move)
    })

    let flattenedAbilities = [];
    abilities.forEach((a) => {
        let abilityObj = {};
        abilityObj.name = a.ability.name;
        abilityObj.url = a.ability.url;
        abilityObj.is_hidden = a.is_hidden;
        flattenedAbilities.push(abilityObj);
    });


    let flattenedTypes = [];
    types.forEach((t) => {
        let typeObj = {};
        typeObj.name = t.type.name;
        typeObj.url = t.type.url;
        flattenedTypes.push(typeObj);
    });

    //The stock image of the pokemon
    let image = ''

    // Check which specific species it is and map by Mongo ID

    return {
        abilities: flattenedAbilities,
        base_experience,
        forms,
        height,
        id,
        is_default,
        location_area_encounters,
        moves: updatedMoves,
        name,
        order,
        species,
        sprites,
        types: flattenedTypes,
        weight,
        image
    };
}

module.exports = pokemonMapper;