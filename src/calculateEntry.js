const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, { age }) => {
  let type = 'adult';
  if (age < 18) type = 'child';
  if (age >= 50) type = 'senior';
  return { ...acc, [type]: acc[type] + 1 || 1 };
}, {});

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants)) return 0;
  return Object.entries(countEntrants(entrants))
    .reduce((acc, [type, quant]) => acc + prices[type] * quant, 0);
};

module.exports = { calculateEntry, countEntrants };
