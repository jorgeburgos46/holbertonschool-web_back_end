import concatArrays from './5-spread-operator.js';

describe('concatArrays', () => {
  it('concatenates two arrays and each character of a string', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual([
      'a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o',
    ]);
  });

  it('handles empty arrays and string', () => {
    expect(concatArrays([], [], '')).toEqual([]);
  });
});
