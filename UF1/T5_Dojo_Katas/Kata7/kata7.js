export function bobEsponja(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'BobEsponja'; // Divisible per 3 i per 5
  } else if (n % 3 === 0) {
    return 'Bob'; // Divisible només per 3
  } else if (n % 5 === 0) {
    return 'Esponja'; // Divisible només per 5
  } else {
    return n; // No divisible ni per 3 ni per 5
  }
}
