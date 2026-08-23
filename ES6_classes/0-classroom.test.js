import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  it('sets _maxStudentsSize from the constructor argument', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
