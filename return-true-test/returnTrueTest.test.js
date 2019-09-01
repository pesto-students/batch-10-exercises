const returnTrue = () => true;

describe("returnTrue", () => {
  test("should return true as a boolean", () => {
    expect(returnTrue()).toBe(true);
    expect(returnTrue()).toStrictEqual(true);
    expect(!returnTrue()).toStrictEqual(false);
    expect(typeof returnTrue()).toBe('boolean');
  });
});
