// Importem la funció a testear
import { minExtraChar } from './kata5.js';

describe('minExtraChar', () => {
  test('Exemple 1: s = "leetscode", dictionary = ["leet", "code", "leetcode"]', () => {
    const s = 'leetscode';
    const dictionary = ['leet', 'code', 'leetcode'];
    expect(minExtraChar(s, dictionary)).toBe(1);
  });

  test('Exemple 2: s = "sayhelloworld", dictionary = ["hello", "world"]', () => {
    const s = 'sayhelloworld';
    const dictionary = ['hello', 'world'];
    expect(minExtraChar(s, dictionary)).toBe(3);
  });

  test('Tot el text està al diccionari', () => {
    const s = 'applebanana';
    const dictionary = ['apple', 'banana'];
    expect(minExtraChar(s, dictionary)).toBe(0);
  });

  test('Cap part del text està al diccionari', () => {
    const s = 'abcde';
    const dictionary = ['fgh', 'ijk'];
    expect(minExtraChar(s, dictionary)).toBe(5);
  });

  test('Text buit', () => {
    const s = '';
    const dictionary = ['a', 'b'];
    expect(minExtraChar(s, dictionary)).toBe(0);
  });

  test('Diccionari buit', () => {
    const s = 'abcde';
    const dictionary = [];
    expect(minExtraChar(s, dictionary)).toBe(5);
  });

  test('Paraules solapades al diccionari', () => {
    const s = 'abcabcabc';
    const dictionary = ['abc', 'bca', 'cab'];
    expect(minExtraChar(s, dictionary)).toBe(0);
  });

  test('Subcadenes amb múltiples opcions', () => {
    const s = 'catsanddog';
    const dictionary = ['cat', 'cats', 'and', 'sand', 'dog'];
    expect(minExtraChar(s, dictionary)).toBe(0);
  });
});
