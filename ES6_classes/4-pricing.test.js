import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

describe('Pricing', () => {
  it('stores attributes with underscore names and exposes getters', () => {
    const currency = new Currency('EUR', 'Euro');
    const p = new Pricing(100, currency);
    expect(p.amount).toBe(100);
    expect(p.currency).toBe(currency);
    expect(p._amount).toBe(100);
    expect(p._currency).toBe(currency);
  });

  it('updates attributes through setters', () => {
    const p = new Pricing(100, new Currency('EUR', 'Euro'));
    const newCurrency = new Currency('USD', 'Dollar');
    p.amount = 50;
    p.currency = newCurrency;
    expect(p.amount).toBe(50);
    expect(p.currency).toBe(newCurrency);
  });

  it('displayFullPrice returns "amount name (code)"', () => {
    const p = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(p.displayFullPrice()).toBe('100 Euro (EUR)');
  });

  it('convertPrice multiplies amount by the conversion rate', () => {
    expect(Pricing.convertPrice(100, 1.5)).toBe(150);
  });
});
