const { species, employees } = require('../data/zoo_data');

function getLocationAndSpeciesName(array, key) {
  return species.reduce((acc, obj) =>
    (array.includes(obj.id) ? [...acc, obj[key]] : acc), []);
}

function getEmployeesCoverage(options) {
  const value = options && Object.values(options)[0];
  const list = employees.reduce((acc, val) => [...acc, {
    id: val.id,
    fullName: `${val.firstName} ${val.lastName}`,
    species: getLocationAndSpeciesName(val.responsibleFor, 'name'),
    locations: getLocationAndSpeciesName(val.responsibleFor, 'location'),
  }], []);
  const found = options ? list.find((val) =>
    val.fullName.includes(value) || val.id === value) : list;
  if (!found) throw new Error('Informações inválidas');
  return found;
}
const actual = getEmployeesCoverage({ name: 'Spry' });
console.log('actual=>', actual);

// const expected = {
//   id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   fullName: 'Sharonda Spry',
//   species: [ 'otters', 'frogs' ],
//   locations: [ 'SE', 'SW' ],
// };
module.exports = getEmployeesCoverage;
