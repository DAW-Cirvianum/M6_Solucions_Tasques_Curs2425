// Definim les variables del nom i edat
var MEU_NOM = "Lluís";
var MEVA_EDAT = 13;

// Creem la variable "ANYS_GOS" on hi guardarem el resultat dels anys canins envers la nostra edat (variable "MEVA_EDAT");
var ANYS_GOS;

if (MEVA_EDAT < 2) { // Comprovem si la variable "MEVA_EDAT" és més gran a "2" (es tenen més de dos anys)
  ANYS_GOS = MEVA_EDAT * 10.5; // Establim el valor de la variable "ANYS_GOS" a l'edat humana de la variable multiplicat per 10.5
} else {
  let anysPrimers = 2 * 10.5; // En cas de tenir més de dos anys, calculem l'edat dels dos primers anys (2 * 10.5);
  ANYS_GOS = anysPrimers + (MEVA_EDAT - 2) * 4; // Calculem la resta d'anys humans i la multipliquem per quatre
}

// Mostrem per consola el resultat del càlcul de l'edat en anys canins
console.log(`El meu nom és ${MEU_NOM}. Tinc ${MEVA_EDAT} anys en anys humans i ${ANYS_GOS} en anys gossos.`);
