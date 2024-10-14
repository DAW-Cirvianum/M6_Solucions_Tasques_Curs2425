// Ex3/ex3.js

export const calculateTimeLeft = (targetDate) => {
  const target = new Date(targetDate);
  const now = new Date();

  if (isNaN(target.getTime())) {
    return 'Data invàlida.';
  }

  let difference = target.getTime() - now.getTime();

  if (difference < 0) {
    return 'La data especificada ja ha passat.';
  }

  // Converteix la diferència de temps a segons.
  let totalSeconds = Math.floor(difference / 1000);

  // Calcula el nombre d'anys.
  const years = Math.floor(totalSeconds / 31536000);
  totalSeconds -= years * 31536000; // Resta els segons dels anys totals

  // Calcula el nombre de mesos.
  const months = Math.floor(totalSeconds / 2592000);
  totalSeconds -= months * 2592000; // Resta els segons dels mesos totals

  // Calcula el nombre de dies.
  const days = Math.floor(totalSeconds / 86400);
  totalSeconds -= days * 86400; // Resta els segons dels dies totals

  // Calcula el nombre d'hores.
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds -= hours * 3600; // Resta els segons de les hores totals

  // Calcula el nombre de minuts.
  const minutes = Math.floor(totalSeconds / 60);
  totalSeconds -= minutes * 60; // Resta els segons dels minuts totals (opcions de segons sobrants)

  let parts = [];
  if (years > 0) parts.push(`${years} any${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mes${months > 1 ? 'os' : ''}`);
  if (days > 0) parts.push(`${days} dia${days > 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours} hora${hours > 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minut${minutes > 1 ? 's' : ''}`);

  return `Falten ${parts.join(', ')} per arribar a la data especificada.`;
};
