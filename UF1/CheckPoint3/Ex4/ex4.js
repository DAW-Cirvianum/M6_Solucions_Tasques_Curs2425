// Ex4/ex4.js

// Funció per generar un tauler d'escacs de 8x8 com a cadena de text.
export const generateChessBoard = () => {
  let chessBoard = ''; // Variable que emmagatzemarà tot el tauler d'escacs com a text.

  // Bucle per a cada fila del tauler.
  for (let row = 0; row < 8; row++) {
    let rowPattern = ''; // Cadena que representa el patró d'una fila.

    // Bucle per a cada columna dins de la fila.
    for (let col = 0; col < 8; col++) {
      // Alterna entre ' ' i '#' depenent de la paritat de la suma de fila i columna:
      // Si la suma de `row` i `col` és parell, afegeix un espai ' '.
      // Si la suma és imparell, afegeix un '#'.
      if ((row + col) % 2 === 0) {
        rowPattern += ' ';
      } else {
        rowPattern += '#';
      }
    }

    // Afegeix el patró de fila complet al tauler, seguit d'un salt de línia.
    chessBoard += rowPattern + '\n';
  }

  // Retorna el tauler complet com a text, eliminant el salt de línia final innecessari.
  //return chessBoard.trimEnd();
  return chessBoard;
};

console.log(generateChessBoard());
