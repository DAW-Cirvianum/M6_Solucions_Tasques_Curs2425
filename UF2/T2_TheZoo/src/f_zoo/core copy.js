import { animals, employees, hours, prices } from './data';

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

function schedule(dayName) {}
// Ens fem una funció que em permeti retornar l'hora en format 12h
function convertHour(hour) {}

// Passem les hores a un string llegible
function hoursToString({ open, close }) {}

function animalCount(species) {}

function animalMap(
  { includeNames, sex } = { includeNames: null, sexEntry: null }
) {}

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
