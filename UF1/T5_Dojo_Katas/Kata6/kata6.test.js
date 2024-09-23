import { fibonacci } from './kata6'; // Assegura't que el camí sigui correcte segons on tinguis la funció implementada

describe('fibonacci', () => {
  test('fibonacci(0) should return 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci(1) should return 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci(2) should return 1', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('fibonacci(3) should return 2', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('fibonacci(4) should return 3', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('fibonacci(5) should return 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci(6) should return 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('fibonacci(7) should return 13', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('fibonacci(8) should return 21', () => {
    expect(fibonacci(8)).toBe(21);
  });

  test('fibonacci(9) should return 34', () => {
    expect(fibonacci(9)).toBe(34);
  });

  test('fibonacci(10) should return 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
});
