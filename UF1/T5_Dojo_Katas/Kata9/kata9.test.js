import { calculator } from './kata9';

describe('calculator', () => {
  test('hauria de retornar 5 quan sumem 2 i 3', () => {
    expect(calculator(2, '+', 3)).toBe(5);
  });

  test('hauria de retornar 3 quan restem 5 i 2', () => {
    expect(calculator(5, '-', 2)).toBe(3);
  });

  test('hauria de retornar 12 quan multipliquem 3 i 4', () => {
    expect(calculator(3, '*', 4)).toBe(12);
  });

  test('hauria de retornar 5 quan dividim 10 per 2', () => {
    expect(calculator(10, '/', 2)).toBe(5);
  });

  test('hauria de retornar "Operador no vàlid" per a operadors no vàlids', () => {
    expect(calculator(10, '%', 2)).toBe('Operador no vàlid');
  });
});
