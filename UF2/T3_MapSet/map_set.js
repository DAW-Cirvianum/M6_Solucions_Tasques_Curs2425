// Enunciats --> https://nova-night-be3.notion.site/UF2-T3-Objectes-Map-i-Set-123c428cdcc2802485fdd64249b878a2?pvs=4

// Ex1. Gestió assistents conferència:
// Això seria una versió molt optimitzada:
// L'objecte JSON ens permet en aquest cas passar d'un format d'objecte a un format string.
// Això ens permetrà comparar els objectes com si fossin strings.
// El Set ens permetrà eliminar els duplicats.
// Finalment tornem a fer un map per aplicar JSON.parse i tornar a tenir l'objecte original.
// I com que estem fent servir Array.from, convertim el Set en un array.
function removeDuplicates(attendeesList) {
  const uniqueAttendees = Array.from(
    new Set(attendeesList.map((attendee) => JSON.stringify(attendee)))
  ).map((attendee) => JSON.parse(attendee));

  return uniqueAttendees;
}

const attendeesList = [
  { name: 'Alice', company: 'TechCo' },
  { name: 'Bob', company: 'DataCorp' },
  { name: 'Alice', company: 'TechCo' },
  { name: 'Charlie', company: 'SoftSys' },
  { name: 'Bob', company: 'DataCorp' },
];

console.log(removeDuplicates(attendeesList));

// Ex2. Seguiment d'inventari

function mergeProducts(productsList) {
  const productMap = new Map();

  // forEach or for...of
  // Compte, tornem a tenir el problema que els arrays no es poden comparar directament (són objectes en el fons)
  for (const product of productsList) {
    productMap.set(
      product.name,
      (productMap.get(product.name) || 0) + product.quantity
    );
  }

  // I convertim el Map en un array de la forma { name: string, quantity: number }[]
  return Array.from(productMap, ([name, quantity]) => ({ name, quantity }));
}

const productsList = [
  { name: 'Llapis', quantity: 100 },
  { name: 'Bolígraf', quantity: 50 },
  { name: 'Llapis', quantity: 50 },
  { name: 'Goma', quantity: 75 },
];

console.log(mergeProducts(productsList));

// Ex3. Iterant sobre un conjunt de dades

function showProductDetails(products) {
  // Mostrar els noms
  const names = Array.from(products.keys());
  console.log('Noms:', names);

  // Mostrar els preus
  const prices = Array.from(products.values());
  console.log('Preus:', prices);

  // Mostrar noms i preus junts
  const namesAndPrices = Array.from(products.entries());
  console.log('Noms i preus:', namesAndPrices);

  // Calcular la suma total dels preus
  const totalSum = prices.reduce((total, price) => total + price, 0);
  console.log('Suma total:', totalSum);
}

const products = new Map([
  ['Llapis', 1],
  ['Bolígraf', 2],
  ['Goma', 0.5],
  ['Quadern', 3],
]);

showProductDetails(products);

// Ex4. Filtratge de dades

function categorizeTasks(tasksList) {
  const taskCategories = new Map();
  const uniqueCategories = new Set();

  tasksList.forEach((task) => {
    if (!taskCategories.has(task.category)) {
      taskCategories.set(task.category, []);
    }
    taskCategories
      .get(task.category)
      // Amb el get obtenim l'array de tasques de la categoria corresponent a taskList
      .push({ name: task.name, time: task.time });
    // I afegim en el nostre map la tasca amb el seu nom i temps
    uniqueCategories.add(task.category);
    // En paral·lel, afegim també la categoria a un Set per obtenir les categories úniques
  });

  console.log('Categories úniques:', Array.from(uniqueCategories));
  console.log('Tasques categoritzades:', Array.from(taskCategories.entries()));
}

const tasksList = [
  { category: 'Desenvolupament', name: 'Crear API REST', time: 120 },
  { category: 'Disseny', name: "Dissenyar interfície d'usuari", time: 60 },
  {
    category: 'Desenvolupament',
    name: 'Implementar funcionalitats del client',
    time: 180,
  },
  { category: 'Testos', name: 'Provar el sistema', time: 90 },
];

categorizeTasks(tasksList);
