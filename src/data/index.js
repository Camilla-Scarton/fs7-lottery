const Data = {
  users: [
    {
      id: 1,
      name: "Nico Barbieri",
      wallet: 100,
      bets: [1],
      email: "nico@example.com",
      password: "1234",
    },
  ],

  bets: [
    {
      users: 1,
      id: 1,
      numbers: [1, 2, 3, 4, 5, 6],
      selected_numbers: [],
      status: "pending", //"pending" |  "done"
      won: false,
    },
  ],
};

export const authUser = (email, password) => {
  const is_user = Data.users.find(
    (entity) => entity.email === email && entity.password === password
  );
  if (is_user) {
    return is_user.id;
  } else {
    return false;
  }
};

/**
 * Find allows to find entity with the given id from the collection
 * @param {string} collectionName Name of the selected collection
 * @param {number} id Id to find
 * @param {object} options
 * @param {array<string>} [options.populate]
 * @returns {object} returns found entity
 */
export const findById = (collectionName, id, options = { populate: [] }) => {
  const entity = JSON.parse(
    JSON.stringify(Data[collectionName].find((entity) => entity.id === id))
  );
  if (!options.populate?.length) {
    return entity;
  } else {
    options.populate.forEach((param) => {
      const population = [];
      const to_find = entity[param];
      if (Array.isArray(to_find)) {
        to_find.forEach((id) => {
          population.push(Data[param].find((item) => item.id === id));
        });
      } else {
        population.push(Data[param].find((item) => item.id === to_find));
      }
      entity[param] = population;
    });
    return entity;
  }
};

export const updateById = (collectionName, id, payload) => {
  const updateIndex = Data[collectionName].findIndex(
    (entity) => entity.id === id
  );
  delete payload.id;
  Data[collectionName][updateIndex] = {
    ...Data[collectionName][updateIndex],
    ...payload,
  };
};

export const save = (collectionName, payload) => {
  Data[collectionName].push({
    ...payload,
    id: new Date().getTime(),
  });
};

export default Data;
