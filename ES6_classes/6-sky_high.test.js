import SkyHighBuilding from './6-sky_high.js';
import Building from './5-building.js';

describe('SkyHighBuilding', () => {
  it('extends Building and exposes sqft and floors getters', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building).toBeInstanceOf(Building);
    expect(building.sqft).toBe(140);
    expect(building.floors).toBe(60);
    expect(building._sqft).toBe(140);
    expect(building._floors).toBe(60);
  });

  it('overrides evacuationWarningMessage with the floor count', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
  });
});
