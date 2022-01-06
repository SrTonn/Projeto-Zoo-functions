const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = employees.find((obj) => obj.id === id).responsibleFor[0];
  const { residents } = species.find((obj) => obj.id === specieId);
  return Object.values(residents.reduce((acc, obj) => (acc.age > obj.age ? acc : obj)));
}

module.exports = getOldestFromFirstSpecies;
