// Funció que calcula la diferència en dies entre dues dates
export function daysBetweenDates(date1, date2) {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);

  // Calculem la diferència en mil·lisegons, convertim a dies
  const differenceInTime = Math.abs(dateObj2 - dateObj1);
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

// Tests manuals
console.log(daysBetweenDates('2024-09-13', '2024-09-20')); // 7 dies
console.log(daysBetweenDates('2023-12-25', '2024-01-01')); // 7 dies
console.log(daysBetweenDates('2024-01-01', '2024-01-01')); // 0 dies
