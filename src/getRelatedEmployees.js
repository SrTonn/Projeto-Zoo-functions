const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.reduce((acc, manager) => {
      if (manager.managers.includes(managerId)) {
        acc.push(`${manager.firstName} ${manager.lastName}`);
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
