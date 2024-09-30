// traduirABalena.ts

/**
 * Funció que tradueix un text a "balena" duplicant les vocals 'e' i 'u'.
 * @param text - El text que es vol traduir.
 * @returns El text traduït a "balena" en majúscules.
 */
function traduirABalena(text: string): string {
  // Afegit tipus `string` per al paràmetre i `string` com a retorn
  const vocals: string[] = ['a', 'e', 'i', 'o', 'u']; // Afegit tipus `string[]` per a l'array de vocals
  let resultatArray: string[] = []; // Afegit tipus `string[]` per a l'array de resultats

  for (let i: number = 0; i < text.length; i++) {
    // Afegit tipus `number` per a `i`
    const lletra: string = text[i].toLowerCase(); // Afegit tipus `string` per a `lletra`
    for (let j: number = 0; j < vocals.length; j++) {
      // Afegit tipus `number` per a `j`
      if (lletra === vocals[j]) {
        if (lletra === 'e' || lletra === 'u') {
          // Comprovació de vocals específiques
          resultatArray.push(lletra, lletra); // Duplicar la vocal 'e' i 'u'
        } else {
          resultatArray.push(lletra); // Afegir la vocal sense duplicar
        }
      }
    }
  }

  const resultString: string = resultatArray.join(''); // Afegit tipus `string` per a `resultString`
  return resultString.toUpperCase(); // Retornar el resultat en majúscules
}

// Si fem servir export default no cal importar la funció amb {} i podem posar-li el nom que vulguem
export default traduirABalena; // Exportació per defecte de la funció

// Exemple d'ús
const input: string = 'turpentina i tortugues'; // Afegit tipus `string` per a `input`
console.log(traduirABalena(input)); // Crida a la funció i mostra el resultat
