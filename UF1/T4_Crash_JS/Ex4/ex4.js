
// Declarem la funció calculMatematic, i l'hi passem el valor numèric per paràmetre
function  calculMatematic(n) {
    let numero= 1; // Declarem el valor que tindrà número

    // Fem un bucle que recorrarà tants cops com números l'hi haguem passat per paràmetre
    for (let i = 1; i <= n; i++) {
        numero *= i; // Multipliquem i incrementem el valor de número en cada passada del bucle
    }
     return numero; // Quan sortim del bucle perquè i és més gran a "n" (valor passat per paràmetre), retornem el valor de la variable "numero"
}

console.log(calculMatematic(4));

// -- EXERCICIS -- //
// 1. => Aquest codi ens permet calcular el valor factorial d'un número
// 2. => Sabries proposar una manera de fer el mateix càlcul sense necessitat de fer servir un bucle?
// Declarem la funció calculMatematic, i l'hi passem el valor numèric per paràmetre
function calculMatematicV2(n) {
    if (n === 0 || n === 1) { // Si la variable "n" és "0" o bé "1"
        return 1; // Retornem "1"
    } else { // Sinó
        return n * calculMatematicV2(n - 1); // Es crida a la mateixa funció (-1) per anar multiplicant el valor de n (recursió)
    }
}

console.log(calculMatematicV2(3));