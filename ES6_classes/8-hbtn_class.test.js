import HolbertonClass from './8-hbtn_class.js';

describe('HolbertonClass', () => {
  it('stores size and location with underscore attributes', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(hc._size).toBe(12);
    expect(hc._location).toBe('Mezzanine');
  });

  it('casts to a Number as the size', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(Number(hc)).toBe(12);
  });

  it('casts to a String as the location', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(String(hc)).toBe('Mezzanine');
  });
});
