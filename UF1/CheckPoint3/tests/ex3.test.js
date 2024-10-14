// tests/Ex3.test.ts

import { calculateTimeLeft } from '../Ex3/ex3';

describe('Exercici 3: Convertidor de Temps', () => {
  test('Passar una targetDate en el futur retorna temps restant', () => {
    // Per simular una data en el futur, utilitzem una data fixa
    const targetDate = '2030-01-01 00:00:00';
    const result = calculateTimeLeft(targetDate);

    // Com el temps restant és variable, només comprobarem que el resultat sigui una cadena que comença amb "Falten"
    expect(result.startsWith('Falten')).toBe(true);
  });

  test('Passar una targetDate en el passat retorna missatge adequat', () => {
    const targetDate = '2000-01-01 00:00:00';
    const result = calculateTimeLeft(targetDate);
    expect(result).toBe('La data especificada ja ha passat.');
  });

  test("Passar una targetDate invàlida retorna missatge d'error", () => {
    const targetDate = 'invalid-date';
    const result = calculateTimeLeft(targetDate);
    expect(result).toBe('Data invàlida.');
  });
});
