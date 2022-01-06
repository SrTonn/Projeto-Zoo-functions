const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every((obj) => obj.age > age);
}

module.exports = getAnimalsOlderThan;
