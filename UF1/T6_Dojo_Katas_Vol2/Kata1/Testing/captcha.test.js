import {
  // captcha.test.js
  generarNombreAleatori,
  decidirOperacio,
  calcularRespostaCorrecta,
  comprovarResposta,
} from './captcha';

describe('Funcions del Captcha', () => {
  test('generarNombreAleatori retorna un nombre entre 0 i 9 per defecte', () => {
    for (let i = 0; i < 100; i++) {
      const num = generarNombreAleatori();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(9);
    }
  });

  test('decidirOperacio retorna "+" o "-" aleatòriament', () => {
    const operacions = new Set();
    for (let i = 0; i < 100; i++) {
      operacions.add(decidirOperacio());
    }
    expect(operacions.has('+')).toBe(true);
    expect(operacions.has('-')).toBe(true);
  });

  test('calcularRespostaCorrecta calcula correctament la suma', () => {
    const result = calcularRespostaCorrecta(5, 3, '+');
    expect(result).toBe(8);
  });

  test('calcularRespostaCorrecta calcula correctament la resta', () => {
    const result = calcularRespostaCorrecta(5, 3, '-');
    expect(result).toBe(2);
  });

  test('calcularRespostaCorrecta llença un error amb una operació no vàlida', () => {
    expect(() => {
      calcularRespostaCorrecta(5, 3, '*');
    }).toThrow('Operació no vàlida');
  });

  test('comprovarResposta retorna true si la resposta és correcta', () => {
    const correcte = comprovarResposta(8, 8);
    expect(correcte).toBe(true);
  });

  test('comprovarResposta retorna false si la resposta és incorrecta', () => {
    const correcte = comprovarResposta(7, 8);
    expect(correcte).toBe(false);
  });
});
