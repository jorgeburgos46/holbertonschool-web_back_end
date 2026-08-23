import ClassRoom from './0-classroom.js';
import initializeRooms from './1-make_classrooms.js';

describe('initializeRooms', () => {
  it('returns 3 ClassRoom instances with the expected sizes', () => {
    const rooms = initializeRooms();
    expect(rooms).toHaveLength(3);
    rooms.forEach((room) => expect(room).toBeInstanceOf(ClassRoom));
    expect(rooms.map((room) => room._maxStudentsSize)).toEqual([19, 20, 34]);
  });
});
