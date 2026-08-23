import createReportObject from './12-createReportObject.js';

describe('createReportObject', () => {
  const employees = {
    engineering: ['Bob', 'Jane'],
    marketing: ['Sylvie'],
  };
  const report = createReportObject(employees);

  it('exposes allEmployees with the same content as the input', () => {
    expect(report.allEmployees).toEqual(employees);
  });

  it('getNumberOfDepartments returns the correct department count', () => {
    expect(report.getNumberOfDepartments(report.allEmployees)).toBe(2);
  });
});
