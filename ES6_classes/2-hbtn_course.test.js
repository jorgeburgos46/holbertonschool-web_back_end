import HolbertonCourse from './2-hbtn_course.js';

describe('HolbertonCourse', () => {
  it('stores attributes with underscore names and exposes getters', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.name).toBe('ES6');
    expect(course.length).toBe(1);
    expect(course.students).toEqual(['Bob', 'Jane']);
    expect(course._name).toBe('ES6');
    expect(course._length).toBe(1);
    expect(course._students).toEqual(['Bob', 'Jane']);
  });

  it('updates attributes through setters', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    course.name = 'Python 101';
    expect(course.name).toBe('Python 101');
  });

  it('throws a TypeError when name is not a string', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(() => {
      course.name = 12;
    }).toThrow(TypeError);
  });

  it('throws a TypeError when length is not a number', () => {
    expect(() => new HolbertonCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
  });

  it('throws a TypeError when students is not an array of strings', () => {
    expect(() => new HolbertonCourse('ES6', 1, 'Bob')).toThrow(TypeError);
    expect(() => new HolbertonCourse('ES6', 1, ['Bob', 2])).toThrow(TypeError);
  });
});
