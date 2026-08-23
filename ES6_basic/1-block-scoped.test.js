import taskBlock from './1-block-scoped.js';

describe('taskBlock', () => {
  it('does not overwrite outer variables when true', () => {
    expect(taskBlock(true)).toEqual([false, true]);
  });

  it('does not overwrite outer variables when false', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
});
