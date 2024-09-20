// Definim les variables del nom i edat del gos
var NOM_GOS = 'Toby';
var EDAT_GOS = 5;

// Creem la variable "ANYS_HUMANS" on guardarem el resultat dels anys humans
var ANYS_HUMANS;

if (EDAT_GOS <= 2) {
  // Si l'edat del gos és igual o inferior a 2 anys
  ANYS_HUMANS = EDAT_GOS * 10.5; // Cada any caní equival a 10.5 anys humans
} else {
  // Si el gos té més de 2 anys
  let anysPrimers = 2 * 10.5; // Els primers dos anys equivalen a 2 * 10.5 anys humans
  ANYS_HUMANS = anysPrimers + (EDAT_GOS - 2) * 4; // Els anys restants equivalen a 4 anys humans per any
}

// Mostrem per consola el resultat del càlcul de l'edat del gos en anys humans
console.log(
  `El meu nom és ${NOM_GOS}. Tinc ${EDAT_GOS} anys en anys canins, que equivalen a ${ANYS_HUMANS} en anys humans.`
);
