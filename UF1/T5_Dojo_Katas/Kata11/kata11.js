// Funció que calcula l'àrea d'un cercle donat el radi
export function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

// Tests manuals
console.log(calculateCircleArea(5)); // 78.53981633974483
console.log(calculateCircleArea(10)); // 314.1592653589793
console.log(calculateCircleArea(0)); // 0
