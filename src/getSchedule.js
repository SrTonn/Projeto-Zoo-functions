const { species, hours } = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  try {
    return species.find(({ name }) => name === scheduleTarget).availability;
  } catch (error) {
    const schedule = Object.entries(hours).reduce((acc, [day, { open, close }]) =>
      ({ ...acc, [day]: { officeHour: `Open from ${open}am until ${close}pm` } }), {});
    Object.keys(schedule).forEach((day) => {
      schedule[day].exhibition = species.reduce((acc, specie) =>
        ((specie.availability.includes(day) && [...acc, specie.name]) || acc), []);
    });
    schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return schedule[scheduleTarget] ? { [scheduleTarget]: schedule[scheduleTarget] } : schedule;
  }
};

module.exports = getSchedule;
