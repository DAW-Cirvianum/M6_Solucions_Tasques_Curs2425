import { daysBetweenDates } from './kata12';

describe('daysBetweenDates', () => {
  test('hauria de calcular correctament el nombre de dies entre dues dates', () => {
    expect(daysBetweenDates('2024-09-13', '2024-09-20')).toBe(7);
    expect(daysBetweenDates('2023-12-25', '2024-01-01')).toBe(7);
    expect(daysBetweenDates('2024-01-01', '2024-01-01')).toBe(0);
  });

  test('hauria de funcionar amb qualsevol parell de dates', () => {
    expect(daysBetweenDates('2024-03-01', '2024-03-15')).toBe(14);
    expect(daysBetweenDates('2023-01-01', '2023-12-31')).toBe(364);
  });
});
