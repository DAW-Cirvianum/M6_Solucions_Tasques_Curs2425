import { sumPositiveElements } from './kata1';
describe('kata #1: sumatori elements positius', () => {
  test('should return 0 for an empty array', () => {
    expect(sumPositiveElements([])).toBe(0);
  });

  test('should return the sum of all positive numbers in the array', () => {
    expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return the sum of positive numbers ignoring negative ones', () => {
    expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13);
    expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9);
  });

  test('should return 0 if there are no positive numbers', () => {
    expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0);
  });
});
