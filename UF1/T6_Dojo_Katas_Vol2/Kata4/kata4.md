# Kata 4 - Idioma de les balenes - Iteracions/Bucles

Preneu una frase com 'turpentina i tortugues' i traduïu-la a la seva equivalent en "parla de balena": 'UUEEIAIOUUEE'.

Hi ha algunes regles senzilles per traduir text a la llengua de les balenes:

- Només hi ha vocals.
- Les "u" i les "e" són extra llargues, així que les hem de duplicar en el nostre programa.

Per aconseguir aquesta traducció, podem fer servir el nostre coneixement de bucles. Comencem!

**Tasques**

1. Crea una variable anomenada `input` que sigui igual a qualsevol frase que vulguis. Aquesta variable contindrà el text que vols traduir a "parla de balena".

2. Les balenes només parlen amb les vocals "a", "e", "i", "o" i "u". Fent servir aquestes lletres minúscules, crea un array anomenat `vocals`. Aquest array no es modificarà.

3. Crea una variable anomenada `resultatArray` i assigna-li un array buit: `[]`. Això servirà com a lloc per emmagatzemar les vocals de la cadena d'entrada.

4. Planteja una lògica per poder iterar a través de la teva Array i identificar si existeixen coincidències amb alguna de les vocals... una iteració niuada (nested) potser?

5. Assegura't que el resultat del teu array contè les vocals de la paraula.

6. Les balenes dupliquen les "e" i les "u" en el seu idioma. Fent servir el mètode `.push()` propi de l'objecte Array, afegeix la lògica per poder duplicar aquesta lletra i dins de la lògica de bucles que ja hagis creat si pot ser!

7. Actualment, `resultArray` hauria de mostrar array de caràcters. Per obtenir l'idioma dels cetacis adequat, volem posar en majúscules els elements de l'array i unir-los en una única cadena. Declara una variable `resultString` i busca quin mètode de les arrays ens permet unir `resultArray` en una cadena única.

8. Finalment capitalitza també totes les lletres.

9. Executa el programa i canta en veu alta la sortida; oficialment parles balenès!
