export function fibonacci(n) {
  // Comprovem els casos base
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Cas general: retornem la suma dels dos números anteriors
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(10); // 55
