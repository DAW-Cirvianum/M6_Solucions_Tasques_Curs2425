// repeatString.test.js
import { repeatString } from './kata2';
describe('repeatString', () => {
  // Test 1: Comprova que si el nombre és 0, retorna una cadena buida
  test('should return an empty string when the number is 0', () => {
    expect(repeatString('JavaScript', 0)).toBe(''); // Esperem que retorni ''
  });

  // Test 2: Comprova que si el nombre és 1, retorna el string original
  test('should return the string itself when the number is 1', () => {
    expect(repeatString('university', 1)).toBe('university'); // Esperem que retorni 'university'
  });

  // Test 3: Comprova que el string es repeteix 3 vegades
  test('should repeat the string 3 times', () => {
    expect(repeatString('hello', 3)).toBe('hellohellohello'); // Esperem que retorni 'hellohellohello'
  });

  // Test 4: Comprova que el string es repeteix 10 vegades
  test('should repeat the string 10 times', () => {
    expect(repeatString('?', 10)).toBe('??????????'); // Esperem que retorni '??????????'
  });
});
