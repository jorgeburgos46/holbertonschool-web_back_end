import returnHowManyArguments from './4-rest-parameter.js';

describe('returnHowManyArguments', () => {
  it('returns 0 when no arguments are passed', () => {
    expect(returnHowManyArguments()).toBe(0);
  });

  it('returns 1 when one argument is passed', () => {
    expect(returnHowManyArguments('one')).toBe(1);
  });

  it('returns the correct count for multiple arguments', () => {
    expect(returnHowManyArguments('one', 'two', 3, '4th')).toBe(4);
  });
});
