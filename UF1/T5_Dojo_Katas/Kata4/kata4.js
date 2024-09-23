// removeSpaces.js

// Definim la funció removeSpaces que accepta un string com a argument
export function removeSpaces(str) {
  let result = ''; // Declarem una variable per emmagatzemar el resultat sense espais

  // Iterem per cada caràcter del string
  for (let i = 0; i < str.length; i++) {
    // Afegim només els caràcters que no són espais
    if (str[i] !== ' ') {
      result += str[i];
    }
  }

  return result; // Retornem el string resultant sense espais
}
