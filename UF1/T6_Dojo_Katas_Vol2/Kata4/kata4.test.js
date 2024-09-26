// traduirABalena.test.js

import traduirABalena from './kata4';

describe('traduirABalena', () => {
  test('Traduir "turpentina i tortugues" a balenès', () => {
    expect(traduirABalena('turpentina i tortugues')).toBe('UUEEIAIOUUUUEE');
  });

  test('Traduir cadena buida retorna cadena buida', () => {
    expect(traduirABalena('')).toBe('');
  });

  test('Traduir només consonants retorna cadena buida', () => {
    expect(traduirABalena('bcdfg')).toBe('');
  });
});
