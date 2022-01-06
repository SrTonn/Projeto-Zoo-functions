const { prices } = require('../data/zoo_data');

function setType(age) {
  let type = 'adult';
  if (age < 18) type = 'child';
  if (age >= 50) type = 'senior';
  return type;
}

function countEntrants(entrants) {
  if (!Array.isArray(entrants)) return 0;
  return entrants.reduce((acc, { age }) => {
    const type = setType(age);
    return { ...acc, [type]: acc[type] + 1 || 1 };
  }, {});
}

function calculateEntry(entrants) {
  return Object.entries(countEntrants(entrants))
    .reduce((acc, [type, quant]) => acc + prices[type] * quant, 0);
}

module.exports = { calculateEntry, countEntrants };
