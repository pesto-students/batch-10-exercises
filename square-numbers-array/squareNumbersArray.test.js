import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('My custom error');
  });
  test('should return square array', () => {
    expect(squareNumbersArray(1, 2, 3)).toEqual([1, 4, 9]);
  });
});
