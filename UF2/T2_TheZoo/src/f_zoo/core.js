import { animals, employees, hours, prices } from './data';

/*   

Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 

*/

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // En quest cas entrants és un objecte amb el nombre d'entrades per tipus (adult, child, senior)
  // Amb Object.entries podem obtenir els valors de l'objecte en format array
  // La funció ha de retornar el preu total de les entrades

  // Per poder retornar el preu total, necessitem recórrer l'objecte "entrants" i allà on el key
  // d'"entrants" coincideixi amb el key de "prices", multiplicar el valor de "entrants" pel valor de "prices"
  // i sumar-ho al total.

  // Com que hem de retornar un únic valor, podem utilitzar la funció "reduce" per acumular el preu total.
  // A cada iteració:
  // 1- Total: acumulador
  // 2- [type, quantity]: desestructuració de l'array. Tipus (per exemple "Adult") i quantitat (per exemple 2).
  // 3- Retornem el total acumulat més el preu de l'entrada, per exemple prices['Adult'] * 2

  // const entries = Object.entries(entrants);

  // const total = entries.reduce((total, entry) => {
  //   const [type, quantity] = entry;
  //   console.log(total, type, quantity);
  //   return total + prices[type] * quantity;
  // }, 0);

  // return total;

  return Object.entries(entrants).reduce((total, [type, quantity]) => {
    console.log(total, type, quantity);
    return total + prices[type] * quantity;
  }, 0);
}

function schedule(dayName) {
  // Format de l'objecte "hours":
  // hours = {
  //   Tuesday: { open: 8, close: 18 },
  //   Wednesday: { open: 8, close: 18 },
  //   Thursday: { open: 10, close: 20 },
  //   Friday: { open: 10, close: 20 },
  //   Saturday: { open: 8, close: 22 },
  //   Sunday: { open: 8, close: 20 },
  //   Monday: { open: 0, close: 0 },
  // };

  // En primer lloc podem decidir si volem filtrar per un dia concret o no. Amb ternaris això ho fem en una sola línia.

  if (dayName) {
    // Ens guardem la informació del dia de l'objecte "hours" en una variable.
    const dayHours = hours[dayName];
    // Si ens passen com a paràmetre el dia, doncs retornem únicament l'horari d'aquest dia. Compte! En format llegible!!!
    return { [dayName]: hoursToString(dayHours) };
  } else {
    // Altrament hem de retornar TOTS els horaris en format llegible.
    return Object.entries(hours).reduce((acc, [day, hours]) => {
      // Un cop dins necessito retornar un objecte amb el nom del dia i les hores en format llegible.
      acc[day] = hoursToString(hours);
      return acc;
    }, {});
  }

  // Manera un pel més complexa per tal de no haver de repetir el codi:
  // const hoursFiltered = dayName ? { [dayName]: hours[dayName] } : hours;
  // return Object.entries(hoursFiltered).reduce((acc, [day, hours]) => {
  //   acc[day] = hoursToString(hours);
  //   return acc;
  // }, {});
}
// Ens fem una funció que em permeti retornar l'hora en format 12h
function convertHour(hour) {
  return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
}

// Passem les hores a un string llegible
function hoursToString({ open, close }) {
  let readableDate = 'CLOSED';
  if (open !== close) {
    const opening = convertHour(open);
    const closing = convertHour(close);
    readableDate = `Open from ${opening} until ${closing}`;
  }
  return readableDate;
}

function animalCount(species) {
  // Necessitem treballar amb la llista "animals" i els paràmetres:
  // ex: name: 'lions', residents: [{},{}...],
  // AQUÍ TREBALLEM AMB UN ARRAY D'OBJECTES --> Necessitem la informació de
  // l'objecte animals però no la de residents (únicament el nombre d'elements a
  // l'interior).
  const animalsCount = animals.reduce((accum, { name, residents }) => {
    // Per cada animal, calculem el nombre de residents
    // Com afegim un nou element a l'objecte? La primera vegada tenim que "acccum" és un objecte buit.
    // Per tant, si retornem l'objecte amb la propietat [name] i li assignem el valor de residents.length
    // estem afegint un nou element a l'objecte.
    accum[name] = residents.length;
    // I l'afegim al resultat
    return accum;
  }, {});

  // Podem fer ús de la notació de "braquets" per accedir a una propietat d'un objecte
  // ex: animalsCount['lions'] --> 4
  return !species ? animalsCount : animalsCount[species];
}

function animalMap({ includeNames, sex } = { includeNames: null, sex: null }) {
  // Ens podem crear l'estructura de l'objecte inicial:
  const initialValue = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  // Amb reduce podem tornar a recòrrer l'array i anar emmagatzemant els animal
  // en funció dels paràmetres que ens demanin:

  return animals.reduce((locations, { location, name, residents }) => {
    const residentsFilter = sex
      ? residents.filter((resident) => resident.sex === sex)
      : residents;
    console.log(residentsFilter);

    // Si ens demanen els noms dels animals
    const withNames = includeNames
      ? { [name]: residentsFilter.map((resident) => resident['name']) }
      : name;
    // Però també podríem aplicar destructuring de l'objecte residents
    // residents: residents.map(({ name }) => name),

    //Amb l'spread operator podem afegir un nou element a un array: [...array, element]
    locations[location] = [...locations[location], withNames];

    return locations;
  }, initialValue);
}

function animalPopularity(rating) {
  // Com que volem tornar a obtenir un sol objecte, optem per un reduce inicial
  const animalsByPopularity = animals.reduce(
    // _animals serà el meu acumulador
    // Per destructuring em quedo únicament amb la informació que necessito, 'popularity' i 'name'
    (_animals, { popularity, name }) => {
      // Si no existeix l'element, el creem
      if (!_animals[popularity]) {
        _animals[popularity] = [];
      }
      // Afegim el nom de l'animal a la posició corresponent
      _animals[popularity] = [..._animals[popularity], name];
      // O amb un push: _animals[popularity].push(name);
      // O amb un concat: _animals[popularity].concat(name);
      return _animals;
    },
    {}
  );
  // Si ens passen un rating, retornem l'objecte amb la informació d'aquest rating
  return rating ? animalsByPopularity[rating] : animalsByPopularity;
}

function animalsByIds(ids) {
  if (typeof ids === 'undefined') {
    return [];
  } else if (typeof ids === 'string') {
    return [animals.find((_animals) => _animals.id === ids)];
  } else if (Array.isArray(ids)) {
    return animals.filter((_animals) => ids.includes(_animals.id));
  } else {
    return [];
  } /*   switch (typeof ids) {
    case 'undefined':
      return [];
    case 'string':
      [animals.find((_animals) => _animals.id === id)];
    case 'object':
      animals.filter((_animals) => ids.includes(_animals.id));
  } */
  /*   const funcsByTypes = {
    undefined: () => [],
    string: (id) => [animals.find((_animals) => _animals.id === id)],
    object: (ids) => animals.filter((_animals) => ids.includes(_animals.id)),
  };

  return funcsByTypes.hasOwnProperty(typeof ids)
    ? funcsByTypes[typeof ids](ids)
    : []; */
}

function animalByName(animalName) {
  if (!animalName) return {};
  // En aquest cas busquem la primera coincidència de l'animal d'acord al nom
  // Farem un find sobre l'array "animals" i un some sobre l'array "residents"
  // Aquest find retornarà l'objecte animal que compleixi la condició, però tot!
  const animal = animals.find(({ residents }) =>
    residents.some((resident) => resident.name === animalName)
  );

  if (!animal) return {};

  // Ara hem de buscar l'animal en concret dins de l'array de residents
  const resident = animal.residents.find(
    (resident) => resident.name === animalName
  );

  // I amb el resident específic ara ja si tenim tota la informació que necessitem
  return {
    name: resident.name,
    sex: resident.sex,
    age: resident.age,
    species: animal.name,
  };
}

function employeesByIds(ids) {
  // Employees is an array of objects.
  // If no id --> empty array.
  // If id --> array with 1 employee info (array with 1 object)
  //// Retornem TOT l'element si trobem la coincidència --> find?
  // if ids --> array with n employee info (array o object)
  //// Retornem TOTS els elements coincidents --> filter?

  //Hem puc crear un objecte amb tres mètodes que s'executaran en funció del tipus
  //de paràmetre que em passin:

  if (typeof ids === 'undefined') {
    return [];
  } else if (typeof ids === 'string') {
    return employees.find((employee) => employee.id === ids);
  } else if (typeof ids === 'object') {
    return employees.filter((employee) => ids.includes(employee.id));
  }
}

function employeeByName(employeeName) {
  // Busquem d'acord al nom o cognom independentment del que ens introdueixi.
  // Retornem l'objecte. No cal contemplar més d'un treballador amb el mateix nom.
  // Retornem una única coincidència --> find?
  // Com que hem de comprovar first_name i Second_name, podem utilitzar diferents estratègies
  // per comprovar-ho.

  const firstLast = (name) => {
    const fields = ['firstName', 'secondName'];
    const cerca = fields.map((valor) =>
      employees.find((treballador) => treballador[valor] === name)
    );
    //Compte, estem retornar un array però! Ens cal retornar un objecte.
    //Podem aprofitar del mateix "find" perquè retorni l'element únicament
    return cerca.find((result) => result !== undefined);
  };

  return employeeName ? firstLast(employeeName) : {};
}

function managersForEmployee(idOrName) {
  //Els empleats tenen assignats managers i un manager té assignat un o diversos empleats.
  //Quan ens passen el nom o id d'un empleat o els seus noms, retornem la informació
  //d'aquest empleat però enlloc de l'ID dels seus managers, posem el nom.
  //1-Primer anem a obtenir la informació del nostre empleat:
  const fields = ['id', 'firstName', 'lastName'];
  const cerca = fields.map((field) =>
    employees.find((treballador) => treballador[field] === idOrName)
  );
  //Això farà que tinguem undefined (falsy) o l'objecte (truthy) del treballador.
  //2-Ara anem a cercar el nom dels managers.
  const treballador = cerca.find(Boolean);
  treballador.managers = treballador.managers.map((managerID) => {
    const managers = employees.find((trblldr) => trblldr.id === managerID);
    //El map ja farà que retorni el l'array dels noms que jo passo en forma d'string:
    return `${managers.firstName} ${managers.lastName}`;
  });
  //3-Retornem l'objecte amb la informació modificada.
  return treballador;
}

function employeeCoverage(idOrName) {
  // your code here
}

export default {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
