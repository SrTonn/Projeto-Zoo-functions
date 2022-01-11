const { species, employees } = require('../data/zoo_data');

const getLocationAndSpeciesName = (array, key) => species.reduce((acc, obj) =>
  (array.includes(obj.id) ? [...acc, obj[key]] : acc), []);

const getEmployeesCoverage = (options) => {
  const value = options && Object.values(options)[0];
  const list = employees.reduce((acc, obj) => [...acc, {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: getLocationAndSpeciesName(obj.responsibleFor, 'name'),
    locations: getLocationAndSpeciesName(obj.responsibleFor, 'location'),
  }], []);
  const found = options ? list.find(({ fullName, id }) =>
    fullName.includes(value) || id === value) : list;
  if (!found) throw new Error('Informações inválidas');
  return found;
};

module.exports = getEmployeesCoverage;
