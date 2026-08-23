import appendToEachArrayValue from './10-loops.js';

describe('appendToEachArrayValue', () => {
  it('prepends the string to each array value', () => {
    expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toEqual([
      'correctly-appended',
      'correctly-fixed',
      'correctly-displayed',
    ]);
  });

  it('returns an empty array unchanged', () => {
    expect(appendToEachArrayValue([], 'correctly-')).toEqual([]);
  });
});
