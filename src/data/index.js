const Data = {
    users: [{
        id: 1,
        name: 'Nico Barbieri',
        wallet: 100,
        bets: [1],
    }],

    bets: [{
        user: 1,
        id: 1,
        numbers: [1, 2, 3, 4, 5, 6],
    }]
}

/**
 * Find allows to find entity with the given id from the collection
 * @param {string} collectionName Name of the selected collection
 * @param {number} id Id to find
 * @returns {object} returns found entity
 */
/* export */ const findById = (collectionName, id, options={populate: []}) => {
    const entity = Data[collectionName].find(entity => entity.id === id)

    if (!options.populate.length) {
        return entity
    } else {
        options.populate.forEach(param => {
            const population = [];
            const array = entity[param];
            array.forEach(id => {
                population.push(Data[param].find(item => item === id))
            })
            entity[param] = population;
        })
        return entity;
    }
}
const user = findById('users', 1, ['bets'])
console.log(user);

/* export const save = (collectionName, payload) => {
    Data[collectionName].push({
        ...payload,
        id: new Date().getTime(),
    });
}


export default Data; */