// Definim amb un array les possibles respostes que donarà el joc
const gameResponses = [
  "La resposta és 42.",
  "No ho sé, hauries de preguntar-l'hi a un expert.",
  "Potser, si les condicions són favorables.",
  "Absolutament, sense cap mena de dubte.",
  "Ho estic considerant, però encara no ho sé amb seguretat.",
  "Mai ho faria, és massa arriscat.",
  "Depèn de les circumstàncies.",
  "Definitivament no, és una mala idea.",
];

// Creem la funció que comprovarà nom, pregunta i donarà una resposta per pantalla a través d'un alert
function randomResponses() {
  let nom = prompt("INTRODUEIX EL TEU NOM:"); // Guardem el nom del jugador
  let pregunta = prompt("INTRODUEIX LA TEVA PREGUNTA:"); // Guardem la resposta del jugador

  // Comprovem que ha introduït algun valor en els prompts de la web
  if (nom == "" || nom == " " || nom.length === 0 || pregunta == "" || pregunta == " " || pregunta.length === 0) 
  {
    alert("ATENCIÓ! Hauries d'omplir ambdós camps per tal que generi una resposta!"); // Si no ha introduït res, mostrem un missatge d'error
  } 
  else // En cas que hagi introduït informació (nom i pregunta), executem el següent codi
  {
    let math = Math.floor(Math.random() * gameResponses.length); // Obtenim un número entre 0 i la llargada màxima de l'array de respostes aleatòries
    let resposta = `   [🧑🏻] - JUGADOR: ${nom}\n   [✏️] - PREGUNTA REALITZADA: ${pregunta}\n   [🤖] - RESPOSTA: ${gameResponses[math]}`; // Guardem la resposta a donar per pantalla a través d'alert
    alert(resposta); // Mostrem la resposta a través d'un alert
    console.log(resposta); // Mostrem la resposta a través de la consola del navegador (console.log)
  }
}

// Executem la funció anterior per tal de mostrar una resposta per pantalla a través d'un alert
randomResponses();