// removeFirstAndLast.js

// Definim la funció removeFirstAndLast que accepta un string com a argument
export function removeFirstAndLast(str) {
  // Si la llargada del string és 2 o menys, retornem el mateix string
  if (str.length <= 2) {
    return str;
  }

  // Recorrem el string manualment per crear-ne un de nou sense el primer i l'últim caràcter
  let result = '';

  // Iterem per cada caràcter començant des de l'índex 1 fins al penúltim caràcter
  for (let i = 1; i < str.length - 1; i++) {
    result += str[i]; // Afegim cada caràcter al nou string "result"
  }

  return result; // Retornem el resultat
}

// // AMB SLICE
// // Definim la funció removeFirstAndLast que accepta un string com a argument
// export function removeFirstAndLast(str) {
//   // Si la llargada del string és 2 o menys, retornem el mateix string
//   if (str.length <= 2) {
//     return str;
//   }

//   // Retornem el string sense el primer i últim caràcter
//   // Utilitzem slice per obtenir un tros del string que va des de l'índex 1 fins al penúltim caràcter
//   return str.slice(1, -1);
// }
