/* eslint-disable max-classes-per-file, class-methods-use-this */
import Building from './5-building.js';

describe('Building', () => {
  it('stores sqft with an underscore attribute and exposes a getter', () => {
    const b = new Building(100);
    expect(b.sqft).toBe(100);
    expect(b._sqft).toBe(100);
  });

  it('does not throw when instantiated directly', () => {
    expect(() => new Building(100)).not.toThrow();
  });

  it('throws when a subclass does not override evacuationWarningMessage', () => {
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(200)).toThrow(
      'Class extending Building must override evacuationWarningMessage',
    );
  });

  it('does not throw when a subclass overrides evacuationWarningMessage', () => {
    class SafeBuilding extends Building {
      evacuationWarningMessage() {
        return 'Evacuate!';
      }
    }
    expect(() => new SafeBuilding(200)).not.toThrow();
  });
});
