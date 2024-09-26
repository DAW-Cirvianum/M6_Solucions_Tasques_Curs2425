// traduirABalena.js

function traduirABalena(text) {
  const vocals = ['a', 'e', 'i', 'o', 'u'];
  let resultatArray = [];

  for (let i = 0; i < text.length; i++) {
    const lletra = text[i].toLowerCase();
    for (let j = 0; j < vocals.length; j++) {
      if (lletra === vocals[j]) {
        if (lletra === 'e' || lletra === 'u') {
          resultatArray.push(lletra, lletra);
        } else {
          resultatArray.push(lletra);
        }
      }
    }
  }

  let resultString = resultatArray.join('');
  return resultString.toUpperCase();
}

// Si fem servir export default no cal importar la funció amb {} i podem posar-li el nom que vulguem
export default traduirABalena;

// Exemple d'ús
const input = 'turpentina i tortugues';
console.log(traduirABalena(input));
