import Car from './10-car.js';

describe('Car', () => {
  it('stores attributes with underscore names', () => {
    const car = new Car('Nissan', 'Turbo', 'Pink');
    expect(car._brand).toBe('Nissan');
    expect(car._motor).toBe('Turbo');
    expect(car._color).toBe('Pink');
  });

  it('cloneCar returns a new instance of the same class without attributes', () => {
    class TestCar extends Car {}
    const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
    const tc2 = tc1.cloneCar();

    expect(tc2).toBeInstanceOf(TestCar);
    expect(tc2).not.toBe(tc1);
    expect(tc2._brand).toBeUndefined();
    expect(tc2._motor).toBeUndefined();
    expect(tc2._color).toBeUndefined();
  });
});
