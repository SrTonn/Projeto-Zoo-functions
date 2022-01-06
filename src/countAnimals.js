const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const animalsObj = species.reduce((acc, obj) => (
    { ...acc, [obj.name]: obj.residents.length }),
  {});
  if (!animal) return animalsObj;
  if (Object.keys(animal).length === 1) return animalsObj[animal.specie];
  const specieFound = species.find((specie) => specie.name === animal.specie);
  return specieFound.residents.filter((sex) => sex.sex === animal.sex).length;
}

module.exports = countAnimals;
// https://stackoverflow.com/questions/4215737/convert-array-to-object
