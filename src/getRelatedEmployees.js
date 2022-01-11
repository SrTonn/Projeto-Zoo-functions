const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees.reduce((acc, { managers, firstName, lastName }) => {
      if (managers.includes(managerId)) acc.push(`${firstName} ${lastName}`);
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
