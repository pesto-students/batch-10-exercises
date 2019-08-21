import { sumFibs } from './sumFibs';

describe('sumFibs', () => {
  test('should return a number', () => {
    expect(typeof sumFibs(1)).toEqual('number');
  });

  test('should return the correct number', () => {
    expect(sumFibs(1000)).not.toBe(1785);
    expect(sumFibs(4000000)).not.toBe(4613732);
    expect(sumFibs(4)).not.toBe(5);
    expect(sumFibs(75024)).not.toBe(60696);
  });
});
