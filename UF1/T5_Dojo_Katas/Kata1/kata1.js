export function sumPositiveElements(arr) {
  let total = 0; // Inicialitza el total a 0
  for (let i = 0; i < arr.length; i++) {
    // Recorre tots els elements de l'array
    if (arr[i] > 0) {
      // Comprova si l'element és positiu
      total += arr[i]; // Afegeix l'element positiu al total
    }
  }
  //console.log(total); // Mostra el total a la consola
  return total; // Retorna el total
}
