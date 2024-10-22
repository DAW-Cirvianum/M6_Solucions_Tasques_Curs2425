import { animals, employees, hours, prices } from './data.js';

/*  
Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 
*/

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // Hem de recórrer l'objecte entrants i allà on la clau/key coincideix amb el key de prices, doncs multiplicar
  // el valor/value d'"entrants" pel valor/value de "prices"

  const entries = Object.entries(entrants);
  //[[Adult,2],[Child,3],[Senior,1]]
  const total = entries.reduce((total, entry) => {
    // Ens posem els valors d'"entry" en variables independents
    const [type, quantity] = entry;
    // type: "Adult"
    // total: 0
    // quantity: 2
    return total + prices[type] * quantity;
  }, 0);

  return total;
}

function schedule(dayName) {
  if (dayName) {
    // Retorno únicament l'horari d'aquest dia
    const dayHours = hours[dayName];
    // dayHours --> { open: 8, close: 18}
    return { [dayName]: hoursToString(dayHours) };
  } else {
    // Retorno TOTS els horaris de la setmana.
    return Object.entries(hours).reduce((acc, [day, hours]) => {
      //Un cop dins necessito retornar un objecte amb el nom del dia i les hores
      //en format llegible
      acc[day] = hoursToString(hours);
      return acc;
    }, {});
  }

  //Passem les hores a un string llegible
  function hoursToString({ open, close }) {
    let readableDate = 'CLOSED';
    if (open !== close) {
      const opening = convertHour(open);
      const closing = convertHour(close);
      readableDate = `Open from ${opening} until ${closing}`;
    }
    return readableDate;
  }

  function convertHour(hour) {
    return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
  }
}
// Ens fem una funció que em permeti retornar l'hora en format 12h

function animalCount(species) {}

function animalMap({ includeNames, sex } = { includeNames: null, sex: null }) {
  // Ens podem l'estructura de l'objecte inicial:
  // const initialValue = {
  //   NE: [],
  //   NW: [],
  //   SE: [],
  //   SW: [],
  // };

  return animals.reduce((acc, { location, name, residents }) => {
    if (!acc[location]) {
      //Inicialitzem la array buida si no existeix
      acc[location] = [];
    }

    const residentsFilter = sex
      ? residents.filter((resident) => resident.sex === sex)
      : residents;

    const withNames = includeNames
      ? { [name]: residentsFilter.map((resident) => resident.name) }
      : name;

    acc[location].push(withNames);
    //acc[location] = [...acc[location], withNames];
    //o també: acc[location].push(animalNames)
    return acc;
  }, {});
}

let options = { includeNames: true, sex: 'male' };
let actual = animalMap(options);

function animalPopularity(rating) {
  const animalsByPopularity = animals.reduce((acc, { popularity, name }) => {
    if (!acc[popularity]) {
      acc[popularity] = [];
    }
    //Afegir el nom de l'animal a la posició corresponent.
    acc[popularity] = [...acc[popularity], name];
    return acc;
  }, {});

  return rating ? animalsByPopularity[rating] : animalsByPopularity;
}

function animalsByIds(ids) {
  if (typeof ids === 'undefined') {
    return [];
  } else if (typeof ids === 'string') {
    return [animals.find((animal) => animal.id === ids)];
  } else if (Array.isArray(ids)) {
    return animals.filter((animal) => ids.includes(animal.id));
  } else {
    return [];
  }
}

function animalByName(animalName) {
  if (!animalName) return {};
  // 1. Recupero només l'objecte on trobaré el meu animal
  const especie = animals.find(({ residents }) =>
    residents.some((resident) => resident.name === animalName)
  );
  // 2. Recupero les dades del resident en concret
  if (!especie) return {};

  const resident = especie.residents.find(
    (resident) => resident.name === animalName
  );
  // 3. Utilitzant les dades generals i les concretes, acabo construint el meu objecte final.
  return {
    name: resident.name,
    sex: resident.sex,
    age: resident.age,
    species: especie.name,
  };
}

function employeesByIds(ids) {
  if (typeof ids === 'undefined') {
    return [];
  } else if (typeof ids === 'string') {
    return [employees.find((employee) => employee.id === ids)];
  } else if (Array.isArray(ids)) {
    return employees.filter((employee) => ids.includes(employee.id));
  }
}

function employeeByName(employeeName) {}

function managersForEmployee(idOrName) {}

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
