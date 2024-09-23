// Definim la funció repeatString que accepta dos paràmetres:
// 'str' (el string a repetir) i 'num' (el nombre de repeticions)
export function repeatString(str, num) {
  // Definim una variable buida que anirà acumulant el resultat
  let result = '';

  // Si el nombre de repeticions és menor o igual a 0, retorna una cadena buida
  if (num <= 0) {
    return result;
  }

  // Utilitzem un bucle per repetir el string 'num' vegades
  for (let i = 0; i < num; i++) {
    result += str; // Concatenem el string a la variable 'result'
  }

  // Retornem el resultat final
  return result;
}

// AMB EL MÈTODE .REPEAT()
// export function repeatString(str, num) {
//   // Si el nombre de repeticions és menor o igual a 0, retorna una cadena buida
//   if (num <= 0) {
//     return '';
//   }
//   // Utilitza el mètode .repeat() per repetir el string 'num' vegades
//   return str.repeat(num);
// }
