import listOfStudents from './9-hoisting.js';

describe('9-hoisting', () => {
  it('exports a default array of 5 StudentHolberton instances', () => {
    expect(listOfStudents).toHaveLength(5);
  });

  it('each student has the expected fullStudentDescription', () => {
    const descriptions = listOfStudents.map((student) => student.fullStudentDescription);
    expect(descriptions).toEqual([
      'Guillaume Salva - 2020 - San Francisco',
      'John Doe - 2020 - San Francisco',
      'Albert Clinton - 2019 - San Francisco',
      'Donald Bush - 2019 - San Francisco',
      'Jason Sandler - 2019 - San Francisco',
    ]);
  });
});
