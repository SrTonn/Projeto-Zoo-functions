const { species } = require('../data/zoo_data');

const setOptions = (residents, options) => {
  let residentsList = options.sex ? residents.filter(({ sex }) => sex === options.sex) : residents;
  residentsList = residentsList.map(({ name }) => name);
  return options.sorted ? residentsList.sort() : residentsList;
};

const getAnimalMap = (options) => species.reduce((acc, { name, location, residents }) => {
  if (!options || !options.includeNames) {
    return { ...acc, [location]: [...acc[location] || '', name] };
  }

  const residentsList = setOptions(residents, options);
  return { ...acc, [location]: [...acc[location] || '', { [name]: residentsList }] };
}, {});

module.exports = getAnimalMap;
