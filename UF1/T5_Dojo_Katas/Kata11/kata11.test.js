import { calculateCircleArea } from './kata11';

describe('calculateCircleArea', () => {
  test("hauria de calcular correctament l'àrea d'un cercle", () => {
    expect(calculateCircleArea(5)).toBeCloseTo(78.5398, 4);
    expect(calculateCircleArea(10)).toBeCloseTo(314.1593, 4);
    expect(calculateCircleArea(0)).toBe(0);
  });

  test("hauria de retornar l'àrea correcta per altres radis", () => {
    expect(calculateCircleArea(1)).toBeCloseTo(3.1416, 4);
    expect(calculateCircleArea(7)).toBeCloseTo(153.938, 4);
  });
});
