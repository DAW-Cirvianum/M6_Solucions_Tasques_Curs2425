import { formatFullName } from './kata10';

describe('formatFullName', () => {
  test('hauria de retornar la frase correcta amb els noms i adjectiu donats', () => {
    expect(formatFullName('Joan', 'Pérez', 'fantàstica')).toBe(
      'El meu nom és Joan Pérez i és una persona fantàstica.'
    );
    expect(formatFullName('Anna', 'García', 'intel·ligent')).toBe(
      'El meu nom és Anna García i és una persona intel·ligent.'
    );
  });

  test('hauria de funcionar amb qualsevol nom i adjectiu', () => {
    expect(formatFullName('Marc', 'Sánchez', 'creativa')).toBe(
      'El meu nom és Marc Sánchez i és una persona creativa.'
    );
    expect(formatFullName('Marta', 'Fernández', 'valenta')).toBe(
      'El meu nom és Marta Fernández i és una persona valenta.'
    );
  });
});
