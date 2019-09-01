const returnAString = () => 'helloworld';

describe('returnAString', () => {
  test('should return a string', () => {
    expect(typeof returnAString()).toBe('string');
  });
});
