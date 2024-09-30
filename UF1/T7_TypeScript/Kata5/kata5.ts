// minExtraChar.ts

/**
 * Funció que calcula el nombre mínim de caràcters extra necessaris
 * per convertir una cadena en una concatenació de paraules de diccionari.
 * @param s - La cadena d'entrada.
 * @param dictionary - L'array de paraules disponibles en el diccionari.
 * @returns El nombre mínim de caràcters extra.
 */
export function minExtraChar(s: string, dictionary: string[]): number {
  // Afegits tipus `string` per `s` i `string[]` per `dictionary`, retorn `number`
  const n: number = s.length; // Afegit tipus `number` per a `n`
  const dp: number[] = new Array(n + 1).fill(0); // Afegit tipus `number[]` per a l'array de programació dinàmica
  const wordSet: Set<string> = new Set(dictionary); // Afegit tipus `Set<string>` per a `wordSet`

  // Iterem des del final de la cadena cap a l'inici
  for (let i: number = n - 1; i >= 0; i--) {
    // Afegit tipus `number` per a `i`
    dp[i] = dp[i + 1] + 1; // Assumim que el caràcter actual és extra
    for (let j: number = i + 1; j <= n; j++) {
      // Afegit tipus `number` per a `j`
      const substr: string = s.substring(i, j); // Afegit tipus `string` per a `substr`
      if (wordSet.has(substr)) {
        // Comprovació si el substr està en el diccionari
        dp[i] = Math.min(dp[i], dp[j]); // Actualització del valor mínim de caràcters extra
      }
    }
  }

  return dp[0]; // Retornem el resultat final
}

// Exemple d'ús
const s: string = 'leetscode'; // Afegit tipus `string` per a `s`
const dictionary: string[] = ['leet', 'code', 'leetcode']; // Afegit tipus `string[]` per a `dictionary`
const resultat: number = minExtraChar(s, dictionary); // Afegit tipus `number` per a `resultat`
console.log(resultat); // Sortida: 1
