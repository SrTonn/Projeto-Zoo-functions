const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const found = employees.find(({ firstName, lastName }) =>
    [firstName, lastName].includes(employeeName));
  return found || {};
}
const actual = getEmployeeByName('Emery');
console.log(actual);

module.exports = getEmployeeByName;
