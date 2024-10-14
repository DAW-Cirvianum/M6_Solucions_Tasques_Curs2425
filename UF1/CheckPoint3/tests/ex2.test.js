// tests/Ex2.test.js

import { createCreature, describeCreature } from '../Ex2/ex2';

describe('Exercici 2: Generador de Criatures Fantàstiques', () => {
  // Testos per a createCreature
  describe('createCreature', () => {
    test("Crear una criatura amb name='Draco' i type='foc' retorna objecte correcte", () => {
      const creature = createCreature('Draco', 'foc');

      expect(creature).toHaveProperty('name', 'Draco');
      expect(creature).toHaveProperty('type', 'foc');
      expect(creature).toHaveProperty('specialAttack', 'Llama Infernal');
      expect(creature).toHaveProperty('powerLevel');
      expect(typeof creature.powerLevel).toBe('number');
      expect(creature.powerLevel).toBeGreaterThanOrEqual(1);
      expect(creature.powerLevel).toBeLessThanOrEqual(100);
    });

    test("Crear una criatura amb name='Aqua' i type='aigua' retorna objecte correcte", () => {
      const creature = createCreature('Aqua', 'aigua');

      expect(creature).toHaveProperty('name', 'Aqua');
      expect(creature).toHaveProperty('type', 'aigua');
      expect(creature).toHaveProperty('specialAttack', "Torrents d'Aigua");
      expect(creature).toHaveProperty('powerLevel');
      expect(typeof creature.powerLevel).toBe('number');
      expect(creature.powerLevel).toBeGreaterThanOrEqual(1);
      expect(creature.powerLevel).toBeLessThanOrEqual(100);
    });

    test("Crear una criatura amb type no reconegut com 'llum' retorna objecte amb atac predeterminat", () => {
      const creature = createCreature('Lumen', 'llum');

      expect(creature).toHaveProperty('name', 'Lumen');
      expect(creature).toHaveProperty('type', 'llum');
      expect(creature).toHaveProperty('specialAttack', 'Atac Bàsic');
      expect(creature).toHaveProperty('powerLevel');
      expect(typeof creature.powerLevel).toBe('number');
      expect(creature.powerLevel).toBeGreaterThanOrEqual(1);
      expect(creature.powerLevel).toBeLessThanOrEqual(100);
    });
  });

  // Testos per a describeCreature
  describe('describeCreature', () => {
    test("Passar una criatura de tipus 'foc' retorna descripció correcta", () => {
      const creature = {
        name: 'Draco',
        type: 'foc',
        specialAttack: 'Llama Infernal',
        powerLevel: 85,
      };
      const description = describeCreature(creature);
      expect(description).toBe(
        "Draco és una criatura de foc amb l'atac especial: Llama Infernal i un nivell de poder de 85."
      );
    });

    test("Passar una criatura de tipus 'aigua' retorna descripció correcta", () => {
      const creature = {
        name: 'Aqua',
        type: 'aigua',
        specialAttack: "Torrents d'Aigua",
        powerLevel: 60,
      };
      const description = describeCreature(creature);
      expect(description).toBe(
        "Aqua és una criatura de aigua amb l'atac especial: Torrents d'Aigua i un nivell de poder de 60."
      );
    });

    test('Passar una criatura amb tipus no reconegut retorna descripció correcta', () => {
      const creature = {
        name: 'Lumen',
        type: 'llum',
        specialAttack: 'Atac Bàsic',
        powerLevel: 40,
      };
      const description = describeCreature(creature);
      expect(description).toBe(
        "Lumen és una criatura desconeguda amb l'atac especial: Atac Bàsic i un nivell de poder de 40."
      );
    });
  });
});
