import { taskFirst, getLast, taskNext } from './0-constants.js';

describe('taskFirst', () => {
  it('returns the expected sentence', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('getLast', () => {
  it('returns the expected suffix', () => {
    expect(getLast()).toBe(' is okay');
  });
});

describe('taskNext', () => {
  it('returns the expected combined sentence', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
