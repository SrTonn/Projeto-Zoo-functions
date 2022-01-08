const { species, hours } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  try {
    return species.find(({ name }) => name === scheduleTarget).availability;
  } catch (error) {
    const schedule = Object.entries(hours).reduce((acc, [day, { open, close }]) =>
      ({ ...acc, [day]: { officeHour: `Open from ${open}am until ${close}pm` } }),
    {});
    Object.keys(schedule).forEach((day) => {
      const speciesPerDay = species.reduce((acc, v) =>
        ((v.availability.includes(day) && [...acc, v.name]) || acc), []);
      schedule[day].exhibition = speciesPerDay;
    });
    schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return schedule[scheduleTarget] ? { [scheduleTarget]: schedule[scheduleTarget] } : schedule;
  }
}

module.exports = getSchedule;
