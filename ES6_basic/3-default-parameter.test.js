import getSumOfHoods from './3-default-parameter.js';

describe('getSumOfHoods', () => {
  it('uses both default parameters', () => {
    expect(getSumOfHoods(34)).toBe(142);
  });

  it('uses one default parameter', () => {
    expect(getSumOfHoods(34, 3)).toBe(56);
  });

  it('uses no default parameters', () => {
    expect(getSumOfHoods(34, 3, 4)).toBe(41);
  });
});
