// tests/exercici1.test.js

import { getBaseCost, calculateTotalCost, checkCombustible } from '../Ex1/ex1';

describe('Exercici 1: Explorador Galàctic', () => {
  // Testos per a getBaseCost
  describe('getBaseCost', () => {
    test("Passar 'exploracio' retorna 1000", () => {
      expect(getBaseCost('exploracio')).toBe(1000);
    });

    test("Passar 'colonitzacio' retorna 2000", () => {
      expect(getBaseCost('colonitzacio')).toBe(2000);
    });

    test("Passar 'mineria' retorna 1500", () => {
      expect(getBaseCost('mineria')).toBe(1500);
    });

    test("Passar 'unknown' retorna 0", () => {
      expect(getBaseCost('unknown')).toBe(0);
    });
  });

  // Testos per a calculateTotalCost
  describe('calculateTotalCost', () => {
    test('Passar baseCost=1000 i distance=800 retorna 1000', () => {
      expect(calculateTotalCost(1000, 800)).toBe(1000);
    });

    test('Passar baseCost=1000 i distance=1200 retorna 1200', () => {
      expect(calculateTotalCost(1000, 1200)).toBe(1200);
    });

    test('Passar baseCost=2000 i distance=1500 retorna 2400', () => {
      expect(calculateTotalCost(2000, 1500)).toBe(2400);
    });
  });

  // Testos per a checkCombustible
  describe('checkCombustible', () => {
    test("Combustible amb quantitat=800, tipus='Hidrogen', preu=50 i distance=750 retorna missatge suficient", () => {
      const combustible = {
        quantitat: 800,
        tipus: 'Hidrogen',
        preu: 50,
      };
      const distance = 750;
      const result = checkCombustible(combustible, distance);
      expect(result).toBe(
        'Pots viatjar amb 800 unitats de Hidrogen a un preu de 50€ per unitat.'
      );
    });

    test("Combustible amb quantitat=800, tipus='Hidrogen', preu=50 i distance=850 retorna missatge insuficient", () => {
      const combustible = {
        quantitat: 800,
        tipus: 'Hidrogen',
        preu: 50,
      };
      const distance = 850;
      const result = checkCombustible(combustible, distance);
      expect(result).toBe('No tens prou combustible per viatjar.');
    });

    test("Combustible amb quantitat=500, tipus='Oxigen', preu=40 i distance=400 retorna missatge suficient", () => {
      const combustible = {
        quantitat: 500,
        tipus: 'Oxigen',
        preu: 40,
      };
      const distance = 400;
      const result = checkCombustible(combustible, distance);
      expect(result).toBe(
        'Pots viatjar amb 500 unitats de Oxigen a un preu de 40€ per unitat.'
      );
    });

    test("Combustible amb quantitat=300, tipus='Oxigen', preu=40 i distance=350 retorna missatge insuficient", () => {
      const combustible = {
        present: {
          quantitat: 300,
          tipus: 'Oxigen',
          preu: 40,
        },
      };
      const distance = 350;
      const result = checkCombustible(combustible, distance);
      expect(result).toBe('No tens prou combustible per viatjar.');
    });
  });
});
