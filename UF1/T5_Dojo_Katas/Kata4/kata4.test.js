// removeSpaces.test.js

// removeSpaces.test.js

import { removeSpaces } from './kata4';

describe('removeSpaces', () => {
  test('hauria d\'eliminar els espais de "good morning"', () => {
    expect(removeSpaces('good morning')).toBe('goodmorning');
  });

  test('hauria d\'eliminar els espais de " carrot cake "', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });

  test('hauria d\'eliminar els espais de "the abbot gave rice to the fox"', () => {
    expect(removeSpaces('the abbot gave rice to the fox')).toBe(
      'theabbotgavericetothefox'
    );
  });

  test('hauria de retornar el mateix string si no té espais', () => {
    expect(removeSpaces('JavaScript')).toBe('JavaScript');
  });

  test('hauria de retornar un string buit si el string només conté espais', () => {
    expect(removeSpaces('     ')).toBe('');
  });
});
