// removeFirstAndLast.test.js

import { removeFirstAndLast } from './kata3';

describe('removeFirstAndLast', () => {
  test('should remove the first and last character from "JavaScript"', () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });

  test('should remove the first and last character from "Alexandria"', () => {
    expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
  });

  test('should remove the first and last character from "hydrogen"', () => {
    expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
  });

  test('should return the original string for "ok"', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });

  test('should return the original string for "A"', () => {
    expect(removeFirstAndLast('A')).toBe('A');
  });
});
