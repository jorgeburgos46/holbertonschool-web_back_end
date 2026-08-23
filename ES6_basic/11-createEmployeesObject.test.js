import createEmployeesObject from './11-createEmployeesObject.js';

describe('createEmployeesObject', () => {
  it('returns an object keyed by department name with the employees array', () => {
    expect(createEmployeesObject('Software', ['Bob', 'Sylvie'])).toEqual({
      Software: ['Bob', 'Sylvie'],
    });
  });
});
