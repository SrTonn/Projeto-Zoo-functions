const { species } = require('../data/zoo_data');

function setOptions(residents, options) {
  let residentsList = options.sex
    ? residents.filter(({ sex }) => sex === options.sex) : residents;
  residentsList = residentsList.map((v) => v.name);
  if (options && options.sorted) residentsList.sort();
  return residentsList;
}

function getAnimalMap(options) {
  const animalMap = species.reduce((acc, { name, location, residents }) => {
    if (!options || !options.includeNames) {
      return { ...acc, [location]: [...acc[location] || '', name] };
    }

    const residentsList = setOptions(residents, options);
    return { ...acc,
      [location]: [...acc[location] || '', {
        [name]: residentsList,
      }] };
  }, {});

  return animalMap;
}

module.exports = getAnimalMap;
