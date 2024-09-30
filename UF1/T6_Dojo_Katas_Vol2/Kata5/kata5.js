export function minExtraChar(s, dictionary) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  const wordSet = new Set(dictionary);

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = dp[i + 1] + 1; // Assumim que el caràcter actual és extra
    for (let j = i + 1; j <= n; j++) {
      const substr = s.substring(i, j);
      if (wordSet.has(substr)) {
        dp[i] = Math.min(dp[i], dp[j]);
      }
    }
  }

  return dp[0];
}

// Exemple d'ús
const s = 'leetscode';
const dictionary = ['leet', 'code', 'leetcode'];
const resultat = minExtraChar(s, dictionary);
console.log(resultat); // Sortida: 1
