// // SOLUCIÓ ALTERNATIVA:
// includes amb indexOf:

// Per cada paraula del diccionari, utilitzem includes per verificar si la paraula està present a remainingString.
// Quan es troba la paraula, utilitzem indexOf per saber la seva posició i afegim la seva longitud a usedCharacters.
// Eliminar paraules trobades:

// Cada vegada que es troba una paraula, eliminem la seva aparició de remainingString mitjançant slice. Això evita comptar-la diverses vegades i assegura que no hi hagi superposicions.
// Retorn del resultat:

// El nombre de caràcters sobrants serà el que queda a remainingString després d'haver eliminat totes les coincidències amb el diccionari.

function minExtraCharacters(s, dictionary) {
  let usedCharacters = 0;
  let remainingString = s;

  dictionary.forEach((word) => {
    while (remainingString.includes(word)) {
      let index = remainingString.indexOf(word);

      // Afegim la longitud de la paraula trobada als caràcters utilitzats
      usedCharacters += word.length;

      // Eliminar la paraula trobada de la cadena restant
      remainingString =
        remainingString.slice(0, index) +
        remainingString.slice(index + word.length);
    }
  });

  // El nombre de caràcters sobrants és la longitud de la cadena menys els caràcters utilitzats
  return remainingString.length;
}

// Tests:
console.log(minExtraCharacters('leetscode', ['leet', 'code', 'leetcode'])); // Sortida: 1
console.log(minExtraCharacters('sayhelloworld', ['hello', 'world'])); // Sortida: 3
