import getFullBudgetObject from './9-getFullBudget.js';

describe('getFullBudgetObject', () => {
  it('includes the budget properties', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    expect(fullBudget.income).toBe(20);
    expect(fullBudget.gdp).toBe(50);
    expect(fullBudget.capita).toBe(10);
  });

  it('getIncomeInDollars formats the value in dollars', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
  });

  it('getIncomeInEuros formats the value in euros', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
  });
});
