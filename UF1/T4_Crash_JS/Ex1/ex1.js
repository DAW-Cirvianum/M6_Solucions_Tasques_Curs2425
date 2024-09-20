// Has de crear una funció anomenada "convertirFahrneheitACelsius(fahrenheit)"

// Comprova que el paràmetre que passem, fahrenheit, és un número

// Retorna el resultat en Celsius amb "return". També pots fer servir console.log per veure si el resultat és correcte

// Si el valor introduit no és vàlid, retorna l'string "Entrada no vàlida. Si us plau, introdueix una temperatura numèrica en graus Fahrenheit."

// EXERCICIS //
// 1. => Creem una variable anomenada fahrenheit
const fahrenheit = 78.9;

// 2. => En cas de voler demanar a l'usuari la temperatura per pantalla, mostrem un prompt on introduïr-la
// const fahrenheit = prompt("Introdueix la temperatura en graus Fahrenheit");


// 3. => Creem la funció la qual ens permetrà realitzar la conversió
function convertirFahrneheitACelsius(fahrenheit) {
  if (!isNaN(fahrenheit)) { // Si el valor passat és un número
    let celsius = Math.floor(((fahrenheit - 32) * 5) / 9); // Realitzem la conversió, traiem els decimals i ho guardem en una variable "celsius"
    return celsius; // Retornem la variable "celsius" anterior
  } else { // Si no és un número
    return "Entrada no vàlida. Si us plau, introdueix una temperatura numèrica en graus Fahrenheit."; // Retornem un missatge d'error
  }
}

// 4. => Cridem la funció i ens guardem el valor que aquesta ens retorna
let valorCelsius = convertirFahrneheitACelsius(parseFloat(fahrenheit));

// 5. => Mostrem per pantalla el valor que ens ha retornat la funció
console.log(`Temperatura: ${fahrenheit} graus fahrenheit equivalen a ${valorCelsius} graus celsius!`);

// 6. => Si volguessim mostrar-ho a través d'un alert, podriem fer-ho de la següent forma
// alert(`Temperatura: ${fahrenheit} graus fahrenheit equivalen a ${valorCelsius} graus celsius!`);

// Deixa aquesta línia - És necessària pel test.
module.exports = convertirFahrneheitACelsius;
