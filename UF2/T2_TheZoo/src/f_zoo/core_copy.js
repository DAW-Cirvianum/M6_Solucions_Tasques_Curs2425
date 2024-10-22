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

function animalMap({ includeNames } = { includeNames: null }) {
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

    const withNames = includeNames
      ? { [name]: residents.map((resident) => resident.name) }
      : name;

    acc[location] = [...acc[location], withNames];
    //o també: acc[location].push(animalNames)
    return acc;
  }, {});
}

let options = { includeNames: true };
let actual = animalMap();

function animalPopularity(rating) {}

function animalsByIds(ids) {}

function animalByName(animalName) {}

function employeesByIds(ids) {}

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
