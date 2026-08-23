import getNeighborhoodsList from './2-arrow.js';

describe('getNeighborhoodsList', () => {
  it('starts with the default neighborhoods', () => {
    // eslint-disable-next-line new-cap
    const instance = new getNeighborhoodsList();
    expect(instance.sanFranciscoNeighborhoods).toEqual(['SOMA', 'Union Square']);
  });

  it('adds a new neighborhood and returns the updated list', () => {
    // eslint-disable-next-line new-cap
    const instance = new getNeighborhoodsList();
    expect(instance.addNeighborhood('Noe Valley')).toEqual([
      'SOMA',
      'Union Square',
      'Noe Valley',
    ]);
  });
});
