import Airport from './7-airport.js';

describe('Airport', () => {
  it('stores name and code with underscore attributes', () => {
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF._name).toBe('San Francisco Airport');
    expect(airportSF._code).toBe('SFO');
  });

  it('toString returns "[object CODE]"', () => {
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF.toString()).toBe('[object SFO]');
  });
});
