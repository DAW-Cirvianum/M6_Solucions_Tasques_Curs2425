// tests/Ex4.test.js

import { generateChessBoard } from '../Ex4/ex4.js';

describe("Exercici 4: Tauler d'Escacs", () => {
  test('Generació de la graella: Ha de generar una cadena de 8 files', () => {
    const chessBoard = generateChessBoard();
    const rows = chessBoard.split('\n');
    expect(rows.length).toBe(8);
  });

  test('Cada fila ha d\'alternar el començament entre un espai i un "#" segons la fila', () => {
    const chessBoard = generateChessBoard();
    const rows = chessBoard.split('\n');

    for (let row = 0; row < 8; row++) {
      const firstChar = rows[row][0];
      if (row % 2 === 0) {
        expect(firstChar).toBe(' ');
      } else {
        expect(firstChar).toBe('#');
      }
    }
  });
});
