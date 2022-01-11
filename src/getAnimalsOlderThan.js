const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, animalAge) => {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age }) => age > animalAge);
};

module.exports = getAnimalsOlderThan;
