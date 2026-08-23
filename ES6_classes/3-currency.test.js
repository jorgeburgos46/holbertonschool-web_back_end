import Currency from './3-currency.js';

describe('Currency', () => {
  it('stores attributes with underscore names and exposes getters', () => {
    const dollar = new Currency('$', 'Dollars');
    expect(dollar.code).toBe('$');
    expect(dollar.name).toBe('Dollars');
    expect(dollar._code).toBe('$');
    expect(dollar._name).toBe('Dollars');
  });

  it('updates attributes through setters', () => {
    const dollar = new Currency('$', 'Dollars');
    dollar.code = '€';
    dollar.name = 'Euros';
    expect(dollar.code).toBe('€');
    expect(dollar.name).toBe('Euros');
  });

  it('displayFullCurrency returns "name (code)"', () => {
    const dollar = new Currency('$', 'Dollars');
    expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
  });
});
