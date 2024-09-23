import { bobEsponja } from './kata7'; // Assegura't que el camí sigui correcte segons on tinguis la funció implementada

describe('bobEsponja', () => {
  test('hauria de retornar "Bob" per als múltiples de 3', () => {
    expect(bobEsponja(3)).toBe('Bob');
    expect(bobEsponja(6)).toBe('Bob');
    expect(bobEsponja(9)).toBe('Bob');
  });

  test('hauria de retornar "Esponja" per als múltiples de 5', () => {
    expect(bobEsponja(5)).toBe('Esponja');
    expect(bobEsponja(10)).toBe('Esponja');
    expect(bobEsponja(20)).toBe('Esponja');
  });

  test('hauria de retornar "BobEsponja" per als múltiples de 3 i 5', () => {
    expect(bobEsponja(15)).toBe('BobEsponja');
    expect(bobEsponja(30)).toBe('BobEsponja');
  });

  test('hauria de retornar el número si no és divisible per 3 o 5', () => {
    expect(bobEsponja(7)).toBe(7);
    expect(bobEsponja(8)).toBe(8);
    expect(bobEsponja(13)).toBe(13);
  });
});
