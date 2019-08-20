const fun = () => {};

describe('returnAFunction', () => {
  test('should return a Function', () => {
    expect(typeof fun).toBe('function');
  });
});
