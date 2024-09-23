// Funció que accepta tres strings i retorna una frase amb el format indicat
export function formatFullName(firstName, lastName, adjective) {
  return `El meu nom és ${firstName} ${lastName} i és una persona ${adjective}.`;
}

// Testos manuals
console.log(formatFullName('Joan', 'Pérez', 'fantàstica')); // "El meu nom és Joan Pérez i és una persona fantàstica."
console.log(formatFullName('Anna', 'García', 'intel·ligent')); // "El meu nom és Anna García i és una persona intel·ligent."
