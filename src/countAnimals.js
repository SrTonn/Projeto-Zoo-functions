const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  const animalsObj = species.reduce((acc, { name, residents }) =>
    ({ ...acc, [name]: residents.length }), {});
  if (!animal) return animalsObj;
  if (Object.keys(animal).length === 1) return animalsObj[animal.specie];
  const { residents } = species.find(({ name }) => name === animal.specie);
  return residents.filter(({ sex }) => sex === animal.sex).length;
};

module.exports = countAnimals;
// https://stackoverflow.com/questions/4215737/convert-array-to-object
