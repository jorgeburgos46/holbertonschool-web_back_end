import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

describe('getBudgetForCurrentYear', () => {
  it('returns an object with computed property names for the current year', () => {
    const year = new Date().getFullYear();
    expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual({
      [`income-${year}`]: 2100,
      [`gdp-${year}`]: 5200,
      [`capita-${year}`]: 1090,
    });
  });
});
