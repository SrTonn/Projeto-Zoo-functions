const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const found = employees.find(({ firstName, lastName }) =>
    [firstName, lastName].includes(employeeName));
  return found || {};
};

module.exports = getEmployeeByName;
