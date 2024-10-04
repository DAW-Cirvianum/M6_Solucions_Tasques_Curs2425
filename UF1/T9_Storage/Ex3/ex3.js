// Funció per guardar el valor del camp a sessionStorage
function guardarDada(camp) {
  let valor = document.getElementById(camp).value;
  sessionStorage.setItem(camp, valor);
}

// Funció per recuperar les dades de sessionStorage i omplir el formulari
function recuperarDades() {
  const camps = ['nom', 'cognoms', 'email']; // Llista dels camps del formulari
  camps.forEach((camp) => {
    let valor = sessionStorage.getItem(camp);
    if (valor !== null) {
      document.getElementById(camp).value = valor;
    }
  });
}

// Quan la pàgina es carrega, recupera les dades guardades
window.onload = recuperarDades;
